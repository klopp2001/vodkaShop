const express = require("express")
const {
  getCart,
  deleteProductFromCart,
  addProductToCart,
  clearCart,
} = require("../controler/cartController")

const cartRouter = express.Router()

cartRouter.post("/", addProductToCart)
cartRouter.post("/delete", deleteProductFromCart)

cartRouter.get("/:email", getCart)
cartRouter.post("/clear", clearCart)
module.exports = cartRouter
