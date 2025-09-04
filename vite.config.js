import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '3ffe1b8674ef.ngrok-free.app',
      'localhost',
      '127.0.0.1'
    ]
  }
})
