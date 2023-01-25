import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const baseURL = 'https://palkoakos-server.onrender.com' //api base url hosted on render.com 
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
  "/captcha": {
    target: baseURL, //'http://localhost:3000/'
    secure: false,
  },
  "/sendmail": {
    target: baseURL,
    secure: false,
  }
}},
  plugins: [react()],
})