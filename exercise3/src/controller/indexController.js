'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _indexmodel = require('../models/indexmodel');

var _indexmodel2 = _interopRequireDefault(_indexmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexController = {
	index: function index() {
		return async function (ctx, next) {
			ctx.body = await ctx.render('index.html', {
				title: '点赞吧'
			});
		};
	},
	update: function update() {
		return async function (ctx, next) {
			var indexM = new _indexmodel2.default(ctx);
			ctx.body = await indexM.updateNum();
		};
	}
};

exports.default = indexController;
