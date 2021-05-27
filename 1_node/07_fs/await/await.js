const {readFile, writeFile}  = require('fs').promises

const start = async()=>{
    try {
        const first = await readFile('../first.txt', 'utf8')
        const second = await readFile('../second.txt', 'utf8')
        await writeFile('./await-overwrite.txt', first + " " + second + "\n")
        await writeFile('./await-append.txt', first + " " + second + "\n", {flag:'a'})
    }catch (error){
        console.log(error)
    }
}

start()