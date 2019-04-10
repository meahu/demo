《在 Node.js 中通过子进程操作标准输入/输出》的案例
没看到，先放着https://mp.weixin.qq.com/s?src=11&timestamp=1554880255&ver=1537&signature=a8iUjWW2yq7E7mSOCQ7dH08WIHxG5kJsoBUPABD95T*gm*qBQol9mB7tTT4Mh1UK3AZNMlw9soW-ym7E8D2K99tdTI5FLhCEYv2HNzQf7*wDTk2otQbN9vzo-gOEBQwS


// 在子进程中运行 shell 命令
const {onExit} = require('@rauschma/stringio');
const {spawn} = require('child_process');

async function main() {
    const filePath = process.argv[2];
    console.log('INPUT: '+filePath);
    const childProcess = spawn('cat', [filePath], {stdio: [process.stdin, process.stdout, process.stderr]}); // (A)
    await onExit(childProcess); // (B)
    console.log('### DONE');
}
main();
// // function onExit(childProcess) {
// //     return new Promise((resolve, reject) => {
// //         childProcess.once('exit', (code, signal) => {
// //             if (code === 0) {
// //                 resolve(undefined);
// //             } else {
// //                 reject(new Error('Exit with error code: '+code));
// //             }
// //         });
// //         childProcess.once('error', (err) => {
// //             reject(err);
// //         });
// //     });
// // }



// 子进程的实现
const {streamWrite, streamEnd, onExit} = require('@rauschma/stringio');
const {spawn} = require('child_process');

async function main() {
    const sink = spawn('cat', [], {stdio: ['pipe', process.stdout, process.stderr]}); // (A)

    writeToWritable(sink.stdin); // (B)
    await onExit(sink);

    console.log('### DONE');
}

async function writeToWritable(writable) {
    await streamWrite(writable, 'First line\n');
    await streamWrite(writable, 'Second line\n');
    await streamEnd(writable);
}

main();



// 从子进程中读取数据
const {chunksToLinesAsync, chomp} = require('@rauschma/stringio');
const {spawn} = require('child_process');
async function main() {
    const filePath = process.argv[2];
    console.log('INPUT: '+filePath);
    
    const source = spawn('cat', [filePath], {stdio: ['ignore', 'pipe', process.stderr]}); // (A)
    
    await echoReadable(source.stdout); // (B)
    
    console.log('### DONE');
}

main();

async function echoReadable(readable) {
    for await (const line of chunksToLinesAsync(readable)) { // (C)
        console.log('LINE: '+chomp(line))
    }
}

