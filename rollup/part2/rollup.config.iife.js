// rollup.config.js
export default {
  input: 'src/main.js',
  output: {
    name: 'iife',
    file: 'rollup/iife.js',
    format: 'iife'
  }
};