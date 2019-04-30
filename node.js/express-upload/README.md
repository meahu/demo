# 文件上传
使用了多种方式进行文件上传

功能：
1. 使用原始的 form 上传文件（localhost:3000/form）
2. 使用 iframe 实现无刷新上传文件（localhost:3000/iframex）
3. 使用 formdata 实现无刷新上传文件（localhost:3000/formdata）
3. 使用 FileReader 实现无刷新上传文件（localhost:3000/fileReader，未完成）

## 技术栈
node.js + express + ejs + multer
express 是 node.js 的框架
ejs 模板引擎。[查看 express 如何配置 ejs](https://github.com/meahu/demo/issues/7 "查看 express 如何配置 ejs")
multer 中间件，处理上传的文件。将上传到缓存的文件保存到相应目录下，并返回相关参数

## 知识扩展

### enctype
表单数据提交前的编码设置
| 值 | 含义 |
| -- | -- |
| application/x-www-form-urlencoded | 默认值，所有字符都会进行编码：空格转换为 "+" 加号，"+"加号转换为空格，特殊符号转换为 ASCII HEX 值 |
| text/plain | 发送纯文本内容，空格转换为 "+" 加号，不对特殊字符进行编码 |
| multipart/form-data | 发送二进制的文件 |