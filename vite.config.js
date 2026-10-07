import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT FOR GITHUB PAGES:
// Change the base to match your GitHub repository name.
// Example: if your repo is "https://github.com/yourname/birthday-website"
// Set base to: '/birthday-website/'
// If deploying to a custom domain or root, set base to: '/'

export default defineConfig({
  plugins: [react()],
  base: '/birthday-website/', // 👈 Change this to your repository name
})
