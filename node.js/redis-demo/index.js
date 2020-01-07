const redis = require('redis');

// 创建连接
const redisClient = redis.createClient(6379, '127.0.0.1');
// 监听错误
redisClient.on('error', (err) => {
    console.log(err);
})
// 设置 key 为 name 的值为 zhangsan
redisClient.set('name', 'zhangsan', redis.print);
// 获取 key 为 name 的值
redisClient.get('name', (err, res) => {
    if(err) {
        console.log(err);
    }
    console.log(res);
    // 关闭连接
    redisClient.quit();
})