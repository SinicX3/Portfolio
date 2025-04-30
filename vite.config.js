import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // Remplace par le nom exact de ton repo GitHub
  plugins: [react()],
})