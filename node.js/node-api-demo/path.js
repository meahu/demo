const path = require('path');
console.log('__dirname', __dirname);
console.log('process.cwd()', process.cwd());
console.log('path.resolve("./")', path.resolve('./'));
console.log('path.resolve("./")', path.resolve(__dirname));
console.log('path.join("/")', path.join());