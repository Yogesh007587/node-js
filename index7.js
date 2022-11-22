const http=require('http');
const data = require('./data');
http.createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify({name:'Kooky',email:'yogeshtripathi2002@gmail.com'}))
res.end();

}).listen(4700);