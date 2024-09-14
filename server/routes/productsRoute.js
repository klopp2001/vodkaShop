const express = require('express')
const {
  getProducts,
  getProductsImages,
  getProduct,
  getExactProducts,
} = require("../controler/productController")

const productRouter = express.Router()

productRouter.get('/products/:category', getProducts)
productRouter.get('/product/:name', getProduct)
productRouter.get('/productsImages', getProductsImages)
productRouter.get("/product/", getExactProducts)

module.exports = productRouter