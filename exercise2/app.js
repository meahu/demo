import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import serve from 'koa-static';
import co from 'co';
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import Config from './config/config'
import initController from './controller/initController';
const app = new Koa();

//路由
initController.init(app, router);

app.context.render = co.wrap(render({
	root: Config.get('viewDir'),
	autoescape: true,
	cache: 'memory',
	ext: 'html',
	writeBody: false
}));

app.use(serve(Config.get('staticDir')));
app.listen(Config.get('port'));

export default app