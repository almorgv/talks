import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      "chartkick",
      "chart.js",
    ],
  }
})
