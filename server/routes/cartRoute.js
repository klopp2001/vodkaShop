const express = require('express')
const {getCart, addProductToCart} = require('../controler/cartController')

const cartRouter = express.Router()

cartRouter.post('/', addProductToCart)
cartRouter.get('/:email', getCart)

module.exports = cartRouter