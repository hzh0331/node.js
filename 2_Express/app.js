const express = require('express')

const {products} = require('./data')
const app = express()

app.get('/api/product', (req, res)=>{
    const productInfo = products.map((product)=>{
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(productInfo)
})

app.get('/api/product/:productID', (req, res)=>{
    const {productID} = req.params
    const product = products.find(product => product.id === Number(productID))
    res.json(product)
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})