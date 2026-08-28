import { db } from 'node-karin'
import {
  KV_COUNT_TOTAL,
  KV_COUNT_DAY,
  KV_DAU_DAY,
  KV_USERS,
  KV_GROUPS,
} from '@/utils/constants'
import type { RecordResult } from '@/types/type'

/** 获取本地日期字符串 YYYY-MM-DD */
export const today = () => {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/**
 * 记录一条消息的统计：消息数、日活、用户/群名单（去重）
 * 统计按机器人（selfId）隔离，每个机器人的数据互相独立
 * @param userId 发送者 userId
 * @param selfId 接收消息的机器人 selfId
 * @param groupId 群号，私聊场景传 undefined
 * @returns 是否为首次使用插件的用户
 */
export const recordMessage = async (userId: string, selfId: string, groupId?: string): Promise<RecordResult> => {
  const date = today()

  // 累计消息数
  const total = (await db.get<number>(KV_COUNT_TOTAL(selfId))) ?? 0
  await db.set(KV_COUNT_TOTAL(selfId), total + 1)

  // 单日消息数
  const dayKey = KV_COUNT_DAY(selfId, date)
  const day = (await db.get<number>(dayKey)) ?? 0
  await db.set(dayKey, day + 1)

  // 日活：按用户去重
  const dauKey = KV_DAU_DAY(selfId, date)
  const users = (await db.get<string[]>(dauKey)) ?? []
  if (!users.includes(userId)) {
    users.push(userId)
    await db.set(dauKey, users)
  }

  // 使用用户：首次出现时加入名单
  const allUsers = (await db.get<string[]>(KV_USERS(selfId))) ?? []
  let isNewUser = false
  if (!allUsers.includes(userId)) {
    allUsers.push(userId)
    await db.set(KV_USERS(selfId), allUsers)
    isNewUser = true
  }

  // 群列表：自动记录机器人所在的群
  if (groupId) {
    const groups = (await db.get<string[]>(KV_GROUPS(selfId))) ?? []
    if (!groups.includes(groupId)) {
      groups.push(groupId)
      await db.set(KV_GROUPS(selfId), groups)
    }
  }

  return { isNewUser, userCount: allUsers.length }
}

/** 获取累计使用人数（按机器人隔离） */
export const getUserCount = async (selfId: string) => ((await db.get<string[]>(KV_USERS(selfId))) ?? []).length

/** 获取已记录的群号列表及数量（按机器人隔离） */
export const getGroups = async (selfId: string) => (await db.get<string[]>(KV_GROUPS(selfId))) ?? []