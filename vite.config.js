import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // react-snap's bundled Chromium (~v69) doesn't support optional chaining;
    // targeting chrome69 makes esbuild transpile ?. into compatible code
    target: 'chrome69',
  },
})
