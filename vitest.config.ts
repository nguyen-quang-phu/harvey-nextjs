import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    include: ['**/__test__/*.spec.{ts,tsx}'], 
  },
})
