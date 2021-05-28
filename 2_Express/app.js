const express = require('express')

const logger = require('./logger')
const authorize = require('./authorize')
const {products} = require('./data')
const app = express()

app.use('/api/',[authorize, logger])

app.get('/', (req, res)=>{
    res.send('Home')
})

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

app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }

    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    res.json(sortedProducts)
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
})