import index from './indexController'
const controllerInit = {
	init (app, router) {
		// Â·ÓÉ×¢²á
		app.use(router(_ => {
			_.get('/index/index', index.index())
			_.get('/index/update', index.update())
		}))
	}
}

export default controllerInit;