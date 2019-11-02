// 引入依赖
const mysql = require('mysql');
// 创建连接对象
const con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'xx'
});
// 开启连接
con.connect();
// 写一条 sql 语句：获取表 user 的所有数据
let sql = select * from user;
// 操作数据库
con.query(sql, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res);
    }
});
断开连接
con.end();