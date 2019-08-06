// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    name: 'cjs',
    file: 'rollup/cjs.js',
    format: 'cjs'
  }
};