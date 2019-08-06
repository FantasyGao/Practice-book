// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    name: 'amd',
    file: 'rollup/amd.js',
    format: 'amd'
  }
};