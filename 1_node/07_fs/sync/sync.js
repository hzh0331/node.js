const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('../first.txt', 'utf-8')
const second = readFileSync('../second.txt', 'utf-8')

writeFileSync('./sync-overwrite.txt', first + " " + second + "\n")
writeFileSync('./sync-append.txt', first + " " + second + "\n", {flag:'a'})