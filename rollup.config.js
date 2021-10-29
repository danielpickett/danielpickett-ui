import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

const packages = ['much-wow', 'such-cool']

/**
 * @type {import('rollup').RollupOptions}
 */
export default () => {
  return packages.map((pkg) => {
    return {
      input: `packages/components/${pkg}/src/index.ts`,
      output: {
        file: `packages/components/${pkg}/dist/index.js`,
        format: 'es',
        sourcemap: true,
      },
      external: ['react'],
      plugins: [
        resolve(),
        commonjs(),
        typescript({
          tsconfigOverride: {
            files: [`packages/components/${pkg}/src/index.ts`],
          },
        }),
        postcss(),
      ],
    }
  })
}
