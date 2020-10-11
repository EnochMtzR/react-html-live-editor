import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './dist',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ tsconfig: 'tsconfig.rollup.json' })
  ],
  external: ['react', 'react-dom']
};
