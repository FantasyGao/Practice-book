const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');

// see below for details on the options
const inputOptions = {
  input: 'main.js',
  // external: ['moment', 'lodash'],
  // plugins: [resolve({
  //   // 给 resolve 插件传入自定配置
  //   customResolveOptions: {
  //     moduleDirectory: 'node_modules'
  //   }
  // })],
};
const outputOptions = {
  file: 'bundle.js',
  format: 'iife'
};

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  // generate code and a sourcemap
  await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();