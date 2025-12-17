import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: '/benhvienchamcuu/', // GitHub Pages deployment base path
  plugins: [
    react(),
    // Visualizer disabled - causes build hang when opening browser
    // To use: uncomment below and run `npm run build`, then open dist/stats.html manually
    // visualizer({
    //   open: false,
    //   gzipSize: true,
    //   brotliSize: true,
    //   filename: 'dist/stats.html'
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/data': path.resolve(__dirname, './src/data'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Code splitting via dynamic imports in App.jsx
        // Manual chunks disabled due to build hang issues with Vite
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
