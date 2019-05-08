const fs = require('fs');
const multer = require('multer');

const uploadFolder = 'upload';


const createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

// 创建图片保存目录
createFolder(uploadFolder);
/* 
* TODO
* 
*/
// FIXME
// multer 的配置，这里配置目标目录与文件命名方式
storage = multer.diskStorage({
    // 目标目录
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    // 文件名
    filename: function (req, file, cb) {
        
        cb(null, file.fieldname + '-' + Date.now());  
    }
});

module.exports = multer({ storage })