const { where } = require("sequelize")
const { orderHistoryModel } = require("../model/orderHistoryModel")
const { productModel } = require("../model/productModel")

const addOrderHistory = async (req, res) => {
  try {
    const { userId, products } = req.body
    const orderId = Math.floor(Math.random() * 10000)
    for (key in products) {
      console.log(products[key].product.id)
      await orderHistoryModel.create({
        userId: userId,
        productId: products[key].product.id,
        orderId: orderId,
      })
    }

    return res.status(200)
  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

const getOrderHistory = async (req, res) => {
  try {
    const userId = req.params.userId
    const result = await orderHistoryModel.findAll({
      where: { userId: userId },
      include: productModel,
      //attributes: ["orderId"],
    })

    return res.status(200).json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

module.exports = { addOrderHistory, getOrderHistory }
