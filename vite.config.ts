import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 加上這段設定
  server: {
    open: true // 這會讓 Vite 在啟動後自動打開您的預設瀏覽器
  }
})

