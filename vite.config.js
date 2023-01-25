import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
  "/captcha": {
    target: 'http://localhost:3000/', 
    changeOrigin: true,
    secure: false,
    ws: true
  },
  "/sendmail": {
    target: 'http://localhost:3000/',
    changeOrigin: true,
    secure: false,
    ws: true
  }
}},
  plugins: [react()],
})