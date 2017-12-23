import path from 'path'
const CONFIG=new Map();
CONFIG.set('port',6000)
CONFIG.set('staticDir',path.join(__dirname,'..'))
CONFIG.set('viewDir',path.join(__dirname,'..','views'))
export default CONFIG