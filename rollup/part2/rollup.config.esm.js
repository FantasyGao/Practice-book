// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    name: 'esm',
    file: 'rollup/esm.js',
    format: 'esm'
  }
};