const express = require('express')

const {people} = require('./data')

const app = express()

app.use(express.static("./methods-public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        res.status(200).send("welcome " + name)
    }
    res.status(401).send("error")
})

app.post('/api/people', (req, res)=>{
    const {name} = req.body
    // const person = {name}
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name'})
    }
    res.status(201).json({success:true, person:name})
})

app.listen(5000, ()=>{
    console.log("server is listening on port 5000")
})