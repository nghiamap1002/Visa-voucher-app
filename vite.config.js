import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
    host: "15.235.154.242",
  },
  build: {
    sourcemap: false
  }
})
