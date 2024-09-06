const express = require('express')
const {getProducts, getProductsImages, getProduct} = require('../controler/productController')

const productRouter = express.Router()

productRouter.get('/products/:category', getProducts)
productRouter.get('/product/:name', getProduct)
productRouter.get('/productsImages', getProductsImages)

module.exports = productRouter