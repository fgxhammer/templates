const http = require('http')
const fs = require('fs')

// streams

const myReadStream = fs.createReadStream(__dirname + 'readMe.txt', 'utf8')
const myWriteStream = fs.createWriteStream(__dirname + 'writeMe.txt')

myReadStream.on('data', chunk => {
  console.log('chunk received')
  myWriteStream.write(chunk)
  console.log('chunk written')
})

// pipes

const myReadStream2 = fs.createReadStream(__dirname + 'readMe.txt', 'utf8')
const myWriteStream2 = fs.createWriteStream(__dirname + 'writeMe.txt')

myReadStream2.pipe(myWriteStream2)

