'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app_o = require('../app_o.js');

var _app_o2 = _interopRequireDefault(_app_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//打开端口
function request() {
    return (0, _supertest2.default)(_app_o2.default.listen());
}
describe('测试路由', function () {
    it('点赞', function (done) {
        request().get('/index/update').expect(200).end(function (err, res) {
            if (res.data == 1) return done(err);
            done();
        });
    });
});
