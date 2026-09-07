import { Fragment, type ReactNode } from 'react'
import { SiReact } from '@icons-pack/react-simple-icons'
import { Separator } from '@heroui/react'
import { ArrowCircleUp, PuzzlePieceIcon, TagIcon } from '@phosphor-icons/react'

const iconWeight = 'duotone' as const

interface TechStackFooterProps {
  /** 插件当前版本 */
  version: string
  /** Karin 框架当前版本 */
  karinVersion: string
  /** 插件远端最新版本（存在新版本时当前版本栏替换为最新版并提示「有可用更新」） */
  pluginLatest?: string
  /** Karin 远端最新版本（存在新版本时替换消息框架栏为「有可用更新」态） */
  karinLatest?: string
}

interface FooterItem {
  name: string
  /** 上部小字状态标签（默认展示该栏角色名） */
  tag: string
  /** 有新版本时标签与版本号切换为霓虹玫红「有可用更新」 */
  hasUpdate?: boolean
  color: string
  glow?: boolean
  icon: ReactNode
}

/**
 * 页脚技术栈行（与帮助页/更新日志页共用）：
 * React | Karin | 插件 | 版本 —— 品牌色图标完整展示 + 本体光晕，
 * 上部小字标签 + 下部大字版本，竖线分隔。
 * 有可用更新时，对应栏位版本号替换为最新版并转为本模板霓虹玫红（rose），
 * 标签行展示「有可用更新」+ 向上箭头图标（参考 kkk 布局）；无更新时与原本完全一致。
 */
export const TechStackFooter = ({ version, karinVersion, pluginLatest, karinLatest }: TechStackFooterProps) => {
  /** 一栏内容：标签行（带可选更新态）+ 大字版本文本 */
  const Column = ({ item }: { item: FooterItem }) => (
    <div className='flex flex-col items-start'>
      <div className={`mb-1 flex items-center gap-1.5 text-sm font-bold tracking-widest uppercase ${item.hasUpdate ? 'text-rose-500' : 'text-muted'}`}>
        {item.hasUpdate && <ArrowCircleUp size={16} weight='fill' />}
        <span>{item.hasUpdate ? '有可用更新' : item.tag}</span>
      </div>
      <span className={`text-2xl leading-7 font-bold tracking-wide ${item.hasUpdate ? 'text-rose-500' : ''}`}>
        {item.name}
      </span>
    </div>
  )

  const items: FooterItem[] = [
    {
      name: 'React',
      tag: 'UI 框架',
      color: '#61DAFB',
      icon: <SiReact size={40} />,
    },
    {
      name: karinLatest ? `Karin v${karinLatest}` : `Karin v${karinVersion}`,
      tag: '消息框架',
      hasUpdate: Boolean(karinLatest),
      color: '#863bff',
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
      tag: '插件',
      color: '#3b82f6',
      icon: <PuzzlePieceIcon size={40} weight={iconWeight} />,
    },
    {
      name: pluginLatest ? `v${pluginLatest}` : `v${version}`,
      tag: '当前版本',
      hasUpdate: Boolean(pluginLatest),
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
            <Column item={item} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}
