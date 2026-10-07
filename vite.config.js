import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The base path is set via the VITE_BASE_URL environment variable.
// - Local dev / Netlify / Vercel: base defaults to '/'
// - GitHub Pages: the CI workflow sets VITE_BASE_URL='/birthday-love-website/'
//
// If you ever rename the repo, update VITE_BASE_URL in .github/workflows/deploy.yml

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
})
