// ==|== Imports ===================================================================================
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// ==|== Config ====================================================================================
export default defineConfig({
  plugins: [vue()],
  base: path.resolve(__dirname, "./dist/"),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/assets/scss/main.scss';"
      }
    }
  }
});
