const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('request was made')
  res.writeHead(200, {'Content-Type': 'text/html'})
  const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
  myReadStream.pipe(res)
}).listen(3000, '127.0.0.1')