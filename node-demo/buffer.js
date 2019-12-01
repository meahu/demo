console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5, 1));
console.log(Buffer.allocUnsafe(5));
console.log(Buffer.allocUnsafe(5, 1));
console.log(Buffer.from([1, 2, 3]));
console.log(Buffer.from('test'));
console.log(Buffer.from('test', 'base64'));

console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));

const buf1 = Buffer.from('Hello ');
const buf2 = Buffer.from('World ');
const buf3 = Buffer.from('!');
const buf = Buffer.concat([buf1, buf2, buf3]);
console.log(buf.toString());

console.log(buf.length);
console.log(buf.toString('utf8'));

let buf4 = Buffer.allocUnsafe(10);
console.log(buf4);
console.log(buf4.fill(10, 2, 6));

const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test');
const buf7 = Buffer.from('test!');
console.log(buf5.equals(buf6));
console.log(buf5.equals(buf7));

console.log(buf5.indexOf('est'));

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const buf8 = Buffer.from('同一个世界');
for (let i = 0; i < buf8.length; i+= 5) {
    let b = Buffer.allocUnsafe(5);
    buf8.copy(b, 0, i);
    console.log(b.toString());
}
for (let i = 0; i < buf8.length; i+= 5) {
    let b = Buffer.allocUnsafe(5);
    buf8.copy(b, 0, i);
    console.log(decoder.write(b));
}