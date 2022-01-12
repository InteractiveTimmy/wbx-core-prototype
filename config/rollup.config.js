import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'dist/loose/index.js',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js',
      },
      {
        format: 'es',
        file: 'dist/esm/index.js',
      },
      {
        format: 'umd',
        file: 'dist/umd/index.js',
        name: 'WebexCore',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      terser(),
    ],
    watch: {
      buildDelay: 1000,
      include: [
        './dist/loose/**/*.ts',
      ],
    },
  },
  {
    input: 'dist/loose/index.d.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.d.ts',
      },
      {
        format: 'es',
        file: 'dist/esm/index.d.ts',
      },
      {
        format: 'umd',
        file: 'dist/umd/index.d.ts',
      },
    ],
    plugins: [
      dts(),
    ],
    watch: {
      buildDelay: 1000,
      include: [
        './dist/loose/**/*.d.ts',
      ],
    },
  },
];