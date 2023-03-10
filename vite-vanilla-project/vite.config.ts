import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-vanilla-project/',
  plugins: [reactRefresh(), vanillaExtractPlugin()]
})