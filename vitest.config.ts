import { configDefaults, defineConfig } from 'vitest/config'
import { configDefaults as viteConfigDefaults } from './vite/config'

export default defineConfig({
  resolve: {
    alias: [...viteConfigDefaults.resolve.alias],
  },
  plugins: [...viteConfigDefaults.plugins],
  test: {
    exclude: [...configDefaults.exclude, 'tests/**/*.(spec|test).ts'],
  },
})
