// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    name: 'umd',
    file: 'rollup/umd.js',
    format: 'umd'
  }
};