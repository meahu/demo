var devWebpack = require('./config/webpack.dev');
var prodWebpack = require('./config/webpack.prod');
switch (process.env.NODE_ENV) {
    case 'dev':
        module.exports = devWebpack;
        break;
    case 'prod':
        module.exports = prodWebpack;
        break;
    default:
        module.exports = devWebpack;
}