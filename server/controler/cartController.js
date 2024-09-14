const cartModel = require("../model/cartModel")
const { productModel } = require("../model/productModel")
const userModel = require("../model/userModel")

const addProductToCart = async (req, res) => {
  try {
    const { userEmail, productName } = req.body
    let cartRecord = await cartModel.findOne({
      where: { user_email: userEmail, product_name: productName },
    })
    if (!cartRecord) {
      cartRecord = await cartModel.create({
        user_email: userEmail,
        product_name: productName,
        count: 1,
      })
    } else {
      await cartRecord.update({
        count: cartRecord.count + 1,
      })
    }

    return res.status(200).json(cartRecord)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteProductFromCart = async (req, res) => {
  try {
    const { userEmail, productName } = req.body
    let cartRecord = await cartModel.findOne({
      where: { user_email: userEmail, product_name: productName },
    })

    if (!cartRecord) {
      return res.status(500).json("Product wasn't found")
    }

    if (cartRecord.count == 1) {
      cartRecord.destroy()
    } else {
      cartRecord.update({
        count: cartRecord.count - 1,
      })
    }
    return res.status(200).json(cartRecord)
  } catch (error) {
    return res.status(500).json(error)
  }
}
const clearCart = async (req, res) => {
  try {
    const { email } = req.body
    let cartRecord = await cartModel.findAll({
      where: { user_email: email },
    })

    if (!cartRecord) {
      return res.status(500).json("Cart wasn't found")
    }

    cartRecord.map((rec) => rec.destroy())
    return res.status(200).json(cartRecord)
  } catch (error) {
    return res.status(500).json(error)
  }
}
const getCart = async (req, res) => {
  try {
    const { email } = req.params
    const cartProducts = await cartModel.findAll({
      where: { user_email: email },
      attributes: ["product_name", "count"],
    })
    return res.status(200).json(cartProducts)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { addProductToCart, deleteProductFromCart, getCart, clearCart }
