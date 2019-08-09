const express = require('express')
const app = express()

const port = 3005

const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.get('/api/products/', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})