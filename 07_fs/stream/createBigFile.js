const {writeFileSync} = require('fs')

// writeFileSync('./sync-overwrite.txt', "aaaaa\n")
for(let i = 0; i < 10000; i++){
    writeFileSync('./bigFile.txt', "hello, world " + i + "\n", {flag:'a'})
}