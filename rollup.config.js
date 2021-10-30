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
    const pkgPath = `packages/components/${pkg}`
    const pkgJson = require(`./${pkgPath}/package.json`)

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
}
