import type { TemplateProps } from '@karinjs/template-react'
import { Separator } from '@heroui/react'
import { TechStackFooter } from '../../../components/tech-stack-footer'

import type { ChangelogData } from '../types'

/** 条目圆点三色轮换（玫瑰→粉→紫红），与极光带同源 */
const dotColors = ['bg-rose-500', 'bg-pink-500', 'bg-fuchsia-500']

/**
 * #qbot更新日志 渲染页 —— 与帮助页同族「绯红霓虹」风格：
 * 点阵网格 + 极光渐变带 + 外框描边，高度随数据自然渲染。
 */
export const ChangelogPage = ({ data }: TemplateProps<ChangelogData>) => {
  return (
    <div className='relative w-[1080px] overflow-hidden rounded-3xl bg-background text-foreground ring-1 ring-black/5 antialiased bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_15%,transparent)_1.5px,transparent_2px)] bg-[size:20px_20px] dark:ring-white/10'>
      {/* 极光渐变带：与帮助页同源 */}
      <div aria-hidden className='pointer-events-none absolute inset-0'>
        <div className='absolute -top-44 -left-1/4 h-[480px] w-[150%] -rotate-6 bg-[linear-gradient(90deg,transparent_0%,rgba(244,63,94,0.20)_25%,rgba(236,72,153,0.17)_50%,rgba(217,70,239,0.14)_75%,transparent_100%)] blur-3xl' />
        <div className='absolute -top-20 left-0 h-[320px] w-[130%] rotate-3 bg-[linear-gradient(90deg,transparent_0%,rgba(236,72,153,0.13)_30%,rgba(217,70,239,0.12)_65%,transparent_100%)] blur-3xl' />
        <div className='absolute -bottom-36 -right-1/4 h-[400px] w-[140%] rotate-2 bg-[linear-gradient(90deg,transparent_0%,rgba(217,70,239,0.10)_35%,rgba(244,63,94,0.10)_70%,transparent_100%)] blur-3xl' />
      </div>

      {/* 头部 */}
      <header className='relative z-10 flex items-end justify-between px-16 pt-16'>
        <h1 className='text-[44px] leading-none font-bold tracking-[0.06em]'>CHANGELOG</h1>
        <span className='text-muted pb-1.5 text-xl tracking-wider'>Qbot更新日志</span>
      </header>
      <Separator className='relative z-10 mx-16 mt-10' />

      {/* 版本条目：无日志时渲染空状态 */}
      <main className='relative z-10 mt-16 px-16'>
        {data.entries.length > 0
          ? (
            <div className='space-y-20'>
              {data.entries.map((entry, entryIndex) => {
                const dotColor = dotColors[entryIndex % dotColors.length]
                return (
                  <section key={entry.version}>
                    <div className='text-muted text-sm font-semibold tracking-[0.3em]'>
                      VERSION
                    </div>
                    <h2 className='mt-2 text-4xl font-bold tracking-wide'>v{entry.version}</h2>
                    <div className='mt-8 h-px w-full bg-linear-to-r from-foreground/25 to-transparent' />
                    <ul className='mt-10 space-y-6'>
                      {entry.items.map(item => (
                        <li key={item} className='flex items-start gap-5'>
                          <span className={`mt-3 h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`} />
                          <span className='min-w-0 flex-1 text-xl leading-relaxed'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )
              })}
            </div>
            )
          : (
            <div className='flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border py-24 text-center'>
              <div className='text-3xl font-bold tracking-wide'>
                {data.emptyText ?? '暂无更新日志'}
              </div>
              <div className='text-muted text-base'>该插件还没有发布过版本更新</div>
            </div>
            )}
      </main>

      {/* 页脚（底部留白） */}
      <footer className='relative z-10 mt-24 px-16 pb-20'>
        <Separator />
        <TechStackFooter version={data.version} />
      </footer>
    </div>
  )
}
