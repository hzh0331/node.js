const http = require('http')

const url = require('url')

// http://localhost:3000?name=aaaa&age=21
http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type":"text/html;charset='utf-8'"})

    res.write("hello node.js")

    res.end()

    if(req.url !== "/favicon.ico"){
        const obj = url.parse(req.url, true).query
        console.log(obj)
        console.log("name:" + obj.name + " age:" + obj.age)
    }
}).listen(3000)