const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('request was made')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hi Luke i\'m you\'r father')
})

server.listen(3000, '127.0.0.1')
console.log('now listening on port 3000')
