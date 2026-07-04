import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// 'base' must match your GitHub repo name exactly, with leading and trailing slashes.
// Example: if your repo is github.com/yourname/my-civil-portfolio, keep it as below.
export default defineConfig({
  plugins: [react()],
  base: '/my-civil-portfolio-updated/',
})
