const express = require('express');
const upload = require('./utils/multerUtil');

const app = express();

// 设置静态目录，图片上传的目录
app.use(express.static('upload'))

// 使用原始的 form 上传文件
app.get('/form', (req, res, next) => {
    res.render('form.ejs', {title: '使用原始的 form 上传文件'});
})

// 使用 iframe 实现无刷新上传文件
app.get('/iframe', (req, res, next) => {
    res.render('iframe.ejs', {title: '使用 iframe 实现无刷新上传文件'});
})

// 使用 iframe 实现无刷新上传文件 优化版
app.get('/iframex', (req, res, next) => {
    res.render('iframex.ejs', {title: '使用 iframe 实现无刷新上传文件 优化版'});
})

// 用 formdata 实现无刷新上传文件
app.get('/formdata', (req, res, next) => {
    res.render('formdata.ejs', {title: '用 formdata 实现无刷新上传文件'});
})

// 图片上传处理
app.post('/uploadImg', upload.single('img'), function(req, res, next){
    var file = req.file;
    console.log(file);
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);

    res.send({err_code: '0', data: file.filename});
});

app.listen(3000, () => {
    console.log('服务已启动，端口：3000')
});
