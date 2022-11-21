const http = require('http');
// const { default: test } = require('node:test');

// function test(a){
//     return a*10;
// }
// const tets=(a)=>a*100

http.createServer((req, resp) => {
    resp.write("<h1>hello this is kooky</h1>");
    resp.end();
}).listen(4500);

