import lodash from 'node-karin/lodash'
import moment from 'node-karin/moment'

/**
 * 生成随机数
 * @param min - 最小值
 * @param max - 最大值
 * @returns
 */
export const random = (min: number, max: number) => lodash.random(min, max)

/**
 * 睡眠函数
 * @param ms - 毫秒
 */
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * 使用moment返回时间
 * @param format - 格式
 */
export const time = (format = 'YYYY-MM-DD HH:mm:ss') => moment().format(format)

/**
 * YYYYMMDD → M月D日（接口返回数字日期，直接用数字运算解析，无效值返回 -）
 * @param ymd - 日期字符串或数字
 */
export const fmtDate = (ymd?: string | number) => {
  const date = Number(ymd)
  if (!(date >= 10000000 && date <= 99999999)) return '-'
  return `${Math.floor(date / 100) % 100}月${date % 100}日`
}

/**
 * 秒级时间戳 → YYYY年M月D日 HH:mm
 * @param ts - 秒级时间戳字符串
 */
export const fmtTime = (ts: string) => {
  const t = new Date(parseInt(ts) * 1000)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日 ${pad(t.getHours())}:${pad(t.getMinutes())}`
}

/**
 * 模板标签：多行书写消息文本，自动去除每行公共缩进、首尾空行，并将换行转为 QQ markdown 的 \r
 */
export const md = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const raw = strings.map((s, i) => (i < values.length ? s + (values[i] == null ? '' : String(values[i])) : s)).join('')
  const lines = raw.split('\n')
  const indents = lines.filter((line) => line.trim()).map((line) => line.match(/^[ \t]*/)![0].length)
  const indent = indents.length ? Math.min(...indents) : 0
  return lines.map((line) => line.slice(indent)).join('\r').trim()
}
