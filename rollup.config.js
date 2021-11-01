import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

const componentNames = ['much-wow', 'such-cool']

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
export default () => {
<<<<<<< HEAD
  return packages.map((pkg) => {
    const pkgPath = `packages/components/${pkg}`
    const pkgJson = require(`./${pkgPath}/package.json`)

    // calculate externals
    const externals = pkgJson.peerDependencies
      ? Object.keys(pkgJson.peerDependencies)
      : []
    console.log(`externalized peer deps for ${pkg}`, externals)
    return {
      input: `${pkgPath}/src/index.ts`,
      output: {
        file: `${pkgPath}/dist/index.js`,
        format: 'es',
        sourcemap: true,
      },
      external: externals,
      plugins: [
        resolve(),
        commonjs(),
        typescript({
          tsconfigOverride: {
            files: [`${pkgPath}/src/index.ts`],
          },
        }),
        postcss(),
      ],
    }
  })
=======
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
          resolve(),
          commonjs(),
          typescript({ useTsconfigDeclarationDir: true }),
          postcss(),
        ],
      }
    })
  )
>>>>>>> main
}
