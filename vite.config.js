import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [tailwindcss(), react()],
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setupVitest.js'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
