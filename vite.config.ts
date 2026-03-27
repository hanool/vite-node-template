/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
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
    tsconfigPaths: true,
  },
  plugins: [
    esmShim(),
    {
      enforce: 'pre',
      ...nodeExternals(),
      apply: 'build',
    },
  ],
  test: {
    maxWorkers: 1,
    reporters: ['verbose'],
  },
})
