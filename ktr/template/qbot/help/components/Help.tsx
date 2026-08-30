import type { TemplateProps } from '@karinjs/template-react'
import { Separator } from '@heroui/react'

import type { HelpData } from '../types'
import { HelpGroup } from './HelpGroup'
import { TechStackFooter } from '../../../components/tech-stack-footer'

/**
 * #qbot帮助 渲染页 —— 1080 宽，高度随数据自然渲染，手机阅读优先。
 * 统一「绯红霓虹」渐变色系：极光带（玫瑰→粉→紫红）与图标颜色同源，
 * 分组英文小标 + 渐变淡出分隔线 + 页面外框描边。
 * HeroUI 组件：Chip / Separator / Kbd；明暗跟随配置 help.theme。
 */
export const Help = ({ data }: TemplateProps<HelpData>) => {
  return (
    <div className='relative w-[1080px] overflow-hidden rounded-3xl bg-background text-foreground ring-1 ring-black/5 antialiased bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_15%,transparent)_1.5px,transparent_2px)] bg-[size:20px_20px] dark:ring-white/10'>
      {/* 极光渐变带：顶部主带 + 中部过渡带 + 底部弱带，绯红霓虹同源 */}
      <div aria-hidden className='pointer-events-none absolute inset-0'>
        <div className='absolute -top-44 -left-1/4 h-[480px] w-[150%] -rotate-6 bg-[linear-gradient(90deg,transparent_0%,rgba(244,63,94,0.20)_25%,rgba(236,72,153,0.17)_50%,rgba(217,70,239,0.14)_75%,transparent_100%)] blur-3xl' />
        <div className='absolute -top-20 left-0 h-[320px] w-[130%] rotate-3 bg-[linear-gradient(90deg,transparent_0%,rgba(236,72,153,0.13)_30%,rgba(217,70,239,0.12)_65%,transparent_100%)] blur-3xl' />
        <div className='absolute -bottom-36 -right-1/4 h-[400px] w-[140%] rotate-2 bg-[linear-gradient(90deg,transparent_0%,rgba(217,70,239,0.10)_35%,rgba(244,63,94,0.10)_70%,transparent_100%)] blur-3xl' />
      </div>

      {/* 头部：大标题 COMMANDS，右侧小字页面标识 */}
      <header className='relative z-10 flex items-end justify-between px-16 pt-16'>
        <h1 className='text-[44px] leading-none font-bold tracking-[0.06em]'>{data.title}</h1>
        <span className='text-muted pb-1.5 text-xl tracking-wider'>Qbot插件帮助页</span>
      </header>
      <Separator className='relative z-10 mx-16 mt-10' />

      {/* 分组 */}
      <main className='relative z-10 mt-16 space-y-24 px-16'>
        {data.groups.map((group, index) => (
          <HelpGroup key={group.title} group={group} groupIndex={index} />
        ))}
      </main>

      {/* 页脚（高度随数据自然渲染）：技术栈 + 插件 + 版本 单行，底部留白 */}
      <footer className='relative z-10 mt-28 px-16 pb-20'>
        <Separator />
        <TechStackFooter version={data.version} />
      </footer>
    </div>
  )
}
