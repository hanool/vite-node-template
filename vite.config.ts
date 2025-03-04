import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import nodeExternals from 'rollup-plugin-node-externals'
import esmShim from '@rollup/plugin-esm-shim'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
  },
  resolve: {
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    conditions: ['node'],
  },
  plugins: [
    esmShim(),
    {
      enforce: 'pre',
      ...nodeExternals(),
      apply: 'build',
    },
    tsconfigPaths(),
  ],
  test: {
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    reporters: ['verbose'],
  },
})
