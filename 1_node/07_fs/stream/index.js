const {createReadStream} = require('fs')

const stream = createReadStream('./bigFile.txt', {highWaterMark:80000})
// const stream = createReadStream('./bigFile.txt', {encoding:'utf8', highWaterMark:80000})
// const stream = createReadStream('../bigFile.txt', {encoding:'utf8'})

stream.on('data', result => console.log(result))
stream.on('error', err => console.log(err))