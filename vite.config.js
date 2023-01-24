import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const api = 'https://palkoakos-server.onrender.com';
const localhost = 'http://localhost:3000/';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/sendmail": {
      target: api, 
      changeOrigin: true,
      secure: false,
      ws: true
    }, "/captcha": {
      target: api, 
      changeOrigin: true,
      secure: false,
      ws: true
    },
  }},
  plugins: [react()],
})