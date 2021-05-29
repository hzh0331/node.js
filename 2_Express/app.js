const express = require('express')

let peopleRouter = require('./Routers/people')
let loginRouter = require('./Routers/login')

const app = express()

app.use(express.static("./methods-public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/api/people', peopleRouter)
app.use('/login', loginRouter)

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})