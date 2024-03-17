import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  server: {
    port: 8000,
    host: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.sass'],
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "@/styles/styles.sass"
        `,
      },
    },
    devSourcemap: true,
  },
})
