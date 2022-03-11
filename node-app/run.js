const http = require('http')
const fs   = require('fs')
const server = http.createServer();
server.on('request', function(req , res){
  const html = fs.readFileSync('index.html')
  res.end(html);
})
server.listen(8080)
console.log('http://localhost:8080')
