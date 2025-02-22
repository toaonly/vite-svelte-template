import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import type { Alias, PluginOption } from 'vite'

const projectRootDir = path.resolve(__dirname, '../')
const resolve = (p: string) => path.resolve(projectRootDir, p)

export const configDefaults = {
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve('src'),
      },
    ] as Alias[],
  },

  plugins: [sveltekit(), tailwindcss()] as PluginOption[],
}
