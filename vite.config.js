import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // tambahkan ini ada di web tailwind
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()], // dan tambahkan tailwindcss() ada di web taolwind
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
