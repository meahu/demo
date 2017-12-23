import indexModel from '../models/indexmodel'
const indexController = {
	//首页
	index () {
		return async(ctx, next) => {
			ctx.body = await ctx.render('index.html', {
				title: '点赞吧'
			})
		}
	},

	// 点赞更新数据库
	update () {
		return async(ctx, next) => {
			const indexM = new indexModel(ctx);
			ctx.body = await indexM.updateNum();
		}
	}
}

export default indexController