const fs = require('fs');


let dir = 'fs-dir';

createDir(dir).then(() => {
    console.log(`目录 ${dir} 创建成功！`)
    return writeFile(`${__dirname}/${dir}/file-test.txt`, 'hello, write file');
}).then(() => {
    console.log(`文件 ${__dirname}/${dir}/file-test.txt 写入成功！`)
    return readFile(`${__dirname}/${dir}/file-test.txt`);
}).then(data => {
    console.log(`文件 ${__dirname}/${dir}/file-test.txt 读取成功，内容是：${data.toString()}`)
    return reName(`${__dirname}/${dir}/file-test.txt`, `${__dirname}/${dir}/file-testX.txt`);
}).then((data) => {
    console.log(`文件 ${__dirname}/${dir}/file-test.txt 重命名成功！`)
}).catch(err => {
    throw err;
});


function createDir (dirName) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dirName, (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

function writeFile(fileName, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

function reName(fileName, newFileName) {
    return new Promise((resolve, reject) => {
        fs.rename(fileName, newFileName, (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}
