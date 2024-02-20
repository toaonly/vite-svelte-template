import { loadEnv } from 'vite'
import { configDefaults } from './vite/config'
import { defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    resolve: {
      alias: [...configDefaults.resolve.alias],
    },
    plugins: [...configDefaults.plugins],
    test: {
      include: ['src/**/*.{test,spec}.{js,ts}'],
      globals: true,
    },
  }
})
