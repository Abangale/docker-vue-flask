import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Mengizinkan akses dari jaringan
    port: 5173, // Pastikan ini sesuai dengan yang digunakan di Docker
    strictPort: true // Hindari perubahan port otomatis
  },
})
