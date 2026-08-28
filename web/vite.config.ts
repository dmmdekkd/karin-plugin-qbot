import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  /** 与 karin 挂载的静态路由前缀一致（src/web/server.ts → app.use('/qbot-web', ...)） */
  base: '/qbot-web/',
  build: {
    outDir: '../dist/web',
    emptyOutDir: true,
  },
})
