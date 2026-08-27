import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Forward API calls to the Flask backend during `npm run dev`
      '/api': {
        target: 'http://0.0.0.0:5000',
        changeOrigin: true,
      },
    },
  },
})
