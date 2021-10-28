import { defineConfig } from 'rollup'
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
// import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'

const componentNames = ['much-wow', 'such-cool']

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
export default () => {
  return defineConfig(
    componentNames.map((componentName) => {
      const path = `packages/components/${componentName}`
      return {
        input: `${path}/src/index.ts`,
        output: {
          file: `${path}/dist/index.js`,
          format: 'es',
          sourcemap: true,
        },
        external: ['react'],
        plugins: [
          // peerDepsExternal(),
          resolve(),
          commonjs(),
          typescript({ useTsconfigDeclarationDir: true }),
          postcss(),
        ],
      }
    })
  )
}
