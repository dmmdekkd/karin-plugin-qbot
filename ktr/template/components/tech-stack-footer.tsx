import { Fragment } from 'react'
import { SiReact } from '@icons-pack/react-simple-icons'
import { Separator } from '@heroui/react'
import { PuzzlePieceIcon, TagIcon } from '@phosphor-icons/react'

const iconWeight = 'duotone' as const

interface TechStackFooterProps {
  /** 插件当前版本 */
  version: string
}

/**
 * 页脚技术栈行（与帮助页/更新日志页共用）：
 * React | Karin | 插件 | 版本 —— 品牌色图标完整展示 + 本体光晕，
 * 小文字在上大文字在下，竖线分隔。
 */
export const TechStackFooter = ({ version }: TechStackFooterProps) => {
  const items = [
    {
      name: 'React',
      role: 'UI 框架',
      color: '#61DAFB',
      icon: <SiReact size={40} />,
    },
    {
      name: 'Karin',
      role: '消息框架',
      color: '#863bff',
      /** 头像图标本体不叠加光晕 */
      glow: false,
      icon: (
        <img
          src='/karin-logo.png'
          alt='Karin'
          className='h-11 w-11 rounded-full object-cover'
        />
      ),
    },
    {
      name: 'karin-plugin-qbot',
      role: '插件',
      color: '#3b82f6',
      icon: <PuzzlePieceIcon size={40} weight={iconWeight} />,
    },
    {
      name: `v${version}`,
      role: '当前版本',
      color: '#64748b',
      icon: <TagIcon size={40} weight={iconWeight} />,
    },
  ]

  return (
    <div className='mt-12 flex items-center justify-between'>
      {items.map((item, index) => (
        <Fragment key={item.name}>
          {index > 0 && <Separator orientation='vertical' className='h-16' />}
          <div className='flex items-center gap-5'>
            <span
              className='shrink-0'
              style={{
                color: item.color,
                ...(item.glow === false
                  ? {}
                  : { filter: `drop-shadow(0 0 14px ${item.color}59)` }),
              }}
            >
              {item.icon}
            </span>
            <div>
              <div className='text-muted text-base font-medium tracking-widest'>
                {item.role}
              </div>
              <div className='mt-1 text-2xl leading-7 font-bold tracking-wide'>{item.name}</div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}
