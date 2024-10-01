const express = require("express")
const {
  getCart,
  decreaseProductFromCart,
  dropProduct,
  addProductToCart,
  clearCart,
} = require("../controler/cartController")

const cartRouter = express.Router()

cartRouter.post("/", addProductToCart)
cartRouter.post("/delete", decreaseProductFromCart)
cartRouter.post("/drop", dropProduct)
cartRouter.get("/:email", getCart)
cartRouter.post("/clear", clearCart)
module.exports = cartRouter
