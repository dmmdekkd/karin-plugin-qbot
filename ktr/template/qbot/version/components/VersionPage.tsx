import type { ReactNode } from 'react'
import type { TemplateProps } from '@karinjs/template-react'
import { Separator } from '@heroui/react'
import {
  SiAndroid,
  SiFreebsd,
  SiGnu,
  SiLinux,
  SiNetbsd,
  SiNodedotjs,
  SiOpenbsd,
} from '@icons-pack/react-simple-icons'
import { CpuIcon, PuzzlePieceIcon, RocketIcon } from '@phosphor-icons/react'

import type { VersionData } from '../types'
import { iconWeight } from '../../help/components/icons'

/**
 * #qbot版本 渲染页 —— 与帮助页同族「绯红霓虹」风格：
 * 点阵网格 + 极光渐变带 + 外框描边，高度随数据自然渲染。
 * Node / 平台 / Karin 版本由服务端读取真实环境后经 data 传入，
 * 组件保持纯渲染，不依赖 Node 内置模块（开发面板浏览器预览可用）。
 */
/** 系统平台 → 品牌图标（simple-icons 单色标；未覆盖的平台回退通用 CPU 图标） */
const platformIcons: Record<string, ReactNode> = {
  Windows: <img src='/windows.svg' alt='Windows' className='h-14 w-14 shrink-0' />,
  macOS: <img src='/apple.svg' alt='macOS' className='h-14 w-14 shrink-0' />,
  Linux: <SiLinux size={56} className='shrink-0 text-[#FCC624]' />,
  Android: <SiAndroid size={56} className='shrink-0 text-[#3DDC84]' />,
  FreeBSD: <SiFreebsd size={56} className='shrink-0 text-[#AB2B28]' />,
  OpenBSD: <SiOpenbsd size={56} className='shrink-0 text-[#FCC21B]' />,
  NetBSD: <SiNetbsd size={56} className='shrink-0 text-[#FFA600]' />,
  Cygwin: <SiGnu size={56} className='shrink-0 text-[#A42E2B]' />,
}

/** 未覆盖平台的通用回退图标（AIX / Haiku / SunOS 等） */
const platformFallback = (
  <CpuIcon size={56} weight={iconWeight} className='shrink-0 text-muted' />
)

export const VersionPage = ({ data }: TemplateProps<VersionData>) => {
  const meta = [
    {
      label: '插件名称',
      value: data.pluginName,
      icon: <PuzzlePieceIcon size={56} weight={iconWeight} className='shrink-0 text-[#3b82f6]' />,
    },
    {
      label: '最新版本',
      value: data.latestText,
      icon: <RocketIcon size={56} weight={iconWeight} className='shrink-0 text-pink-500' />,
    },
    {
      label: '运行环境',
      value: `Node ${data.nodeVersion}`,
      icon: <SiNodedotjs size={56} className='shrink-0 text-[#5FA04E]' />,
    },
    {
      label: '系统平台',
      value: data.platformName,
      icon: platformIcons[data.platformName] ?? platformFallback,
    },
    {
      label: '消息框架',
      value: `Karin v${data.karinVersion}`,
      icon: (
        <img
          src='/karin-logo.png'
          alt='Karin'
          className='h-14 w-14 shrink-0 rounded-full object-cover'
        />
      ),
    },
  ]

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
        <h1 className='text-[44px] leading-none font-bold tracking-[0.06em]'>{data.title}</h1>
        <span className='text-muted pb-1.5 text-xl tracking-wider'>Qbot插件版本页</span>
      </header>
      <Separator className='relative z-10 mx-16 mt-10' />

      {/* 版本主区 */}
      <main className='relative z-10 mt-16 px-16'>
        <div className='text-muted text-sm font-semibold tracking-[0.3em]'>CURRENT VERSION</div>
        <div className='mt-4 text-[110px] leading-none font-black tracking-tight'>
          v{data.version}
        </div>

        {/* 运行信息 */}
        <div className='mt-20 grid grid-cols-2 gap-x-12 gap-y-12'>
          {meta.map(({ label, value, icon }) => (
            <div key={label} className='flex min-w-0 items-center gap-6'>
              {icon}
              <div className='min-w-0'>
                <div className='text-muted text-base font-medium tracking-widest'>{label}</div>
                <div className='mt-1 truncate text-2xl font-bold'>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 页脚（底部留白）：Karin 框架版本信息 */}
      <footer className='relative z-10 mt-24 px-16 pb-20'>
        <Separator />
      </footer>
    </div>
  )
}
