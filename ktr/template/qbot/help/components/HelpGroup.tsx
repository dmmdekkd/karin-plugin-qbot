import { Kbd } from '@heroui/react'

import type { HelpGroup as HelpGroupData } from '../types'
import { fallbackIcon, iconWeight, icons } from './icons'

interface HelpGroupProps {
  group: HelpGroupData
  /** 分组序号，驱动图标颜色轮换 */
  groupIndex: number
}

/** 指令中的 [参数] 片段渲染为 HeroUI Kbd 键帽，与固定指令区分 */
const renderCmd = (cmd: string) =>
  cmd.split(/(\[[^\]]+\])/).map((part, index) =>
    /^\[[^\]]+\]$/.test(part)
      ? (
        <Kbd.Root key={index} className='mx-1 px-2 text-base'>
          {part}
        </Kbd.Root>
        )
      : (
        <span key={index}>{part}</span>
        )
  )

/** 分组图标颜色轮换（玫瑰→粉→紫红），与极光带同源，深浅模式同一套配色 */
const palettes = ['text-rose-500', 'text-pink-500', 'text-fuchsia-500']

/** 指令分组：英文小标 + 渐变淡出分隔线 + 双列指令网格（裸彩色图标，纯排版） */
export const HelpGroup = ({ group, groupIndex }: HelpGroupProps) => {
  const iconColor = palettes[groupIndex % palettes.length]

  return (
    <section>
      {group.en && (
        <div className='text-muted text-sm font-semibold tracking-[0.3em]'>{group.en}</div>
      )}
      <h2 className='mt-2 text-4xl font-bold tracking-wide'>{group.title}</h2>
      <div className='mt-8 h-px w-full bg-linear-to-r from-foreground/25 to-transparent' />
      <div className='mt-14 grid grid-cols-2 gap-x-12 gap-y-10'>
        {group.items.map((item) => {
          const ItemIcon = icons[item.icon ?? ''] ?? fallbackIcon
          return (
            <div key={item.cmd} className='flex min-w-0 items-center gap-6'>
              <ItemIcon
                size={56}
                weight={iconWeight}
                className={`shrink-0 ${iconColor}`}
              />
              <div className='min-w-0 flex-1'>
                <div className='truncate font-mono text-2xl font-semibold'>
                  {renderCmd(item.cmd)}
                </div>
                <div className='text-muted mt-2 truncate text-xl'>{item.desc}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
