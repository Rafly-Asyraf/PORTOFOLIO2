import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // tambahkan ini ada di web tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()], // dan tambahkan tailwindcss() ada di web taolwind
})
