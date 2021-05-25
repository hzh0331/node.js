const {readFile, writeFile} = require('fs')

readFile('../first.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log('err: ' + err)
        return
    }

    const first = result

    readFile('../second.txt', 'utf-8', (err, result)=>{
        if(err){
            console.log('err: ' + err)
            return
        }

        const second = result

        writeFile('./async-overwrite.txt', first + " " + second + "\n", (err, result)=>{
            if(err){
                console.log('err: ' + err)
                return
            }
            console.log(result)
        })

        writeFile('./async-append.txt', first + " " + second + "\n", {flag:'a'}, (err, result)=>{
            if(err){
                console.log('err: ' + err)
                return
            }
            console.log(result)
        })
    })
})