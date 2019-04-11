// server.js
const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', res => {
    // 告知用户连接成功
    res.emit('connect');

    // 接收用户发来的消息
    res.on('send', data => {
        console.log(data);
        // res.emit('broadcast', data);
        // 广播
        res.broadcast.emit('broadcast',data);
    })
    
    // 断开连接
    res.on('disconnect', () => {
        console.log('一个用户断开了连接');
    })
})

server.listen(3000);




// client.js
<script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js"></script>

<script>
    var socket = io('http://localhost:3000');
    var nameArr = ['小米', '小明', '小红', '小刚', '晓晓'];
    var name = nameArr[Math.floor(Math.random() * 5)];

    // 服务器告知客户端链接成功
    socket.on('connect', data => {
        // 发送消息
        setInterval(() => {
            socket.emit('send', `${name}发来消息：${Math.random()}`);
        }, 3000)
    });

    // 接收广播
    socket.on('broadcast', data => {
        console.log(data);
    });
    
    // 断开连接
    socket.on('disconnect', function(){
        console.log('服务器告知客户端断开链接');
    });
</script> 
