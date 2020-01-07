
define(function(require, exports, module) {
  let asyncRequire = require('./async-require.js');

  async function main() {
    await asyncRequire('https://cdn.bootcss.com/vue/2.6.10/vue.js');
    console.log(new Vue());
  }
});
