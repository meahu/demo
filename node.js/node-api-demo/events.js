const EventEmitter = require('events');
// class myEvent extends EventEmitter {

// }

const me = new EventEmitter();
const testFn = () => {
    console.log('test events');
};
me.on('test', testFn)

setInterval(() => {
    me.emit('test');
}, 500)

setInterval(() => {
    me.removeListener('test', testFn);
}, 2000)

// 错误事件
me.on('error', err => {
    console.log(err);
})

me.emit('error', new Error('Oops!'));

me.once('test', () => {
    console.log('once test events');
})

setInterval(() => {
    me.emit('test');
}, 500)