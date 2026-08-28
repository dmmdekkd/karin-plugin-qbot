import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { app, router, db, getMimeType, logger } from 'node-karin'
import { dir } from '@/dir'
import { config } from '@/utils/config'
import { today } from '@/model/count'
import { getCookies } from '@/model/login'
import { QBot } from '@/model/qbot'
import {
  KV_COOKIE,
  KV_COUNT_TOTAL,
  KV_COUNT_DAY,
  KV_DAU_DAY,
  KV_USERS,
  KV_GROUPS,
} from '@/utils/constants'
import type { AppItem } from '@/types/type'

/** WebUI 静态资源目录（前端构建产物 dist/web） */
const webDir = path.join(dir.pluginDir, 'dist/web')

/** 统一响应 */
const ok = (res: unknown, data: unknown) => (res as { json: (body: unknown) => void }).json({ ok: true, data })
const fail = (res: unknown, message: string) => (res as { json: (body: unknown) => void }).json({ ok: false, message })

/** 已登录账号（票据按发起扫码的用户隔离，账号级通用） */
interface WebAccount {
  userId: string
  /** 当前管理指针应用 */
  appId: string
  /** 开发者名下全部应用 */
  apps: AppItem[]
}

/** 扫描本地票据，获取全部已登录账号及其名下应用列表 */
const getAccounts = async (): Promise<WebAccount[]> => {
  const keys = await db.keys(KV_COOKIE('%', '%'))
  const userIds = [...new Set(keys.map(key => key.split(':')[2]))]
  const accounts = await Promise.all(userIds.map(async (userId): Promise<WebAccount | null> => {
    const stored = await getCookies(userId)
    if (!stored) return null
    try {
      const data = await QBot.getlists(stored.ck.uin, stored.ck.developerId, stored.ck.ticket)
      return { userId, appId: stored.appId, apps: data?.data?.apps ?? [] }
    } catch {
      return { userId, appId: stored.appId, apps: [] }
    }
  }))
  return accounts.filter((item): item is WebAccount => item !== null)
}

/** 本地统计概览：按机器人（selfId）隔离的累计/今日消息、用户、群组数据 */
const getLocalOverview = async () => {
  const keys = await db.keys(KV_COUNT_TOTAL('%'))
  const selfIds = keys.map(key => key.split(':')[3])
  const date = today()
  return Promise.all(selfIds.map(async selfId => ({
    selfId,
    total: (await db.get<number>(KV_COUNT_TOTAL(selfId))) ?? 0,
    todayMsg: (await db.get<number>(KV_COUNT_DAY(selfId, date))) ?? 0,
    todayDau: ((await db.get<string[]>(KV_DAU_DAY(selfId, date))) ?? []).length,
    users: ((await db.get<string[]>(KV_USERS(selfId))) ?? []).length,
    groups: ((await db.get<string[]>(KV_GROUPS(selfId))) ?? []).length,
  })))
}

/**
 * 挂载 WebUI 静态资源：/qbot-web → dist/web
 * 静态资源不含敏感数据不做鉴权；API 全部挂在 karin 内部 router（/api/v1）下复用登录鉴权
 */
app.use('/qbot-web', (req, res) => {
  const rel = decodeURIComponent(req.path.replace(/^\/+/, '')) || 'index.html'
  let file = path.resolve(webDir, rel)
  // 防路径穿越
  if (!file.startsWith(webDir + path.sep) && file !== webDir) return res.status(403).end()
  // SPA 回退：无扩展名的未知路径回 index.html
  if (!existsSync(file) || !statSync(file).isFile()) {
    if (path.extname(rel)) return res.status(404).end()
    file = path.join(webDir, 'index.html')
  }
  if (!existsSync(file)) return res.status(404).end()
  res.type(getMimeType(file) || 'application/octet-stream').send(readFileSync(file))
})

/** 获取插件配置 */
router.get('/qbot/config', (_req, res) => {
  ok(res, config())
})

/** 保存插件配置（字段级合并，day 限制 1-30） */
router.post('/qbot/config', (req, res) => {
  try {
    const body = (req.body ?? {}) as {
      statistics?: { enable?: boolean }
      welcome?: { enable?: boolean }
      qbot?: { day?: number }
    }
    const cur = config()
    const day = Number(body.qbot?.day ?? cur.qbot.day)
    const next = {
      statistics: { enable: body.statistics?.enable ?? cur.statistics.enable },
      welcome: { enable: body.welcome?.enable ?? cur.welcome.enable },
      qbot: { day: Math.min(Math.max(Math.trunc(day) || 1, 1), 30) },
    }
    writeFileSync(path.join(dir.ConfigDir, 'config.json'), JSON.stringify(next, null, 2), 'utf-8')
    ok(res, next)
  } catch (error) {
    logger.error('[QBot][WebUI] 保存配置失败', error)
    fail(res, `保存失败: ${error instanceof Error ? error.message : error}`)
  }
})

/** 概览：已登录账号（含名下应用列表）+ 本地统计 */
router.get('/qbot/overview', async (_req, res) => {
  try {
    const [accounts, stats] = await Promise.all([getAccounts(), getLocalOverview()])
    ok(res, { accounts, stats })
  } catch (error) {
    logger.error('[QBot][WebUI] 获取概览失败', error)
    fail(res, `获取概览失败: ${error instanceof Error ? error.message : error}`)
  }
})

/** 开放平台数据：近 N 天 DAU 四类（消息/群聊/好友/频道）+ 本地每日消息统计 */
router.get('/qbot/stats', async (req, res) => {
  try {
    const day = Math.min(Math.max(Math.trunc(Number(req.query.day)) || 7, 1), 30)
    const userId = typeof req.query.userId === 'string' ? req.query.userId : undefined
    const accounts = await getAccounts()
    const account = accounts.find(item => item.userId === userId) ?? accounts[0]
    if (!account) return fail(res, '尚未登录 QQ 开放平台，请先在机器人内发送 #qbot登录')

    const stored = await getCookies(account.userId)
    if (!stored) return fail(res, '登录票据不存在')

    const read = (type: number) => QBot.getdau(stored.ck.uin, stored.ck.developerId, stored.ck.ticket, stored.ck.appId, type)
    const [guild, msg, group, friend] = await Promise.all([read(0), read(1), read(2), read(3)])

    // 本地每日统计（今天往前 day 天，聚合全部机器人）
    const totalKeys = await db.keys(KV_COUNT_TOTAL('%'))
    const selfIds = totalKeys.map(key => key.split(':')[3])
    const dates = Array.from({ length: day }, (_, i) => {
      const d = new Date(Date.now() - i * 86_400_000)
      const pad = (n: number) => String(n).padStart(2, '0')
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
    })
    const local = await Promise.all(dates.map(async date => {
      let msg = 0
      let dau = 0
      for (const selfId of selfIds) {
        msg += (await db.get<number>(KV_COUNT_DAY(selfId, date))) ?? 0
        dau += ((await db.get<string[]>(KV_DAU_DAY(selfId, date))) ?? []).length
      }
      return { date, msg, dau }
    }))

    ok(res, {
      day,
      appId: stored.ck.appId,
      remote: {
        guild: guild?.data?.guild_data ?? [],
        msg: msg?.data?.msg_data ?? [],
        group: group?.data?.group_data ?? [],
        friend: friend?.data?.friend_data ?? [],
      },
      local,
    })
  } catch (error) {
    logger.error('[QBot][WebUI] 获取数据失败', error)
    fail(res, `获取数据失败: ${error instanceof Error ? error.message : error}`)
  }
})

logger.info(`[QBot] WebUI 就绪：/qbot-web/`)
