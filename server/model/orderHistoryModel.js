const sequelize = require("../database")

const { DataTypes } = require("sequelize")
const userModel = require("./userModel")
const { productModel } = require("./productModel")

const orderHistoryModel = sequelize.define("orderHistory", {
  orderId: { type: DataTypes.INTEGER },
  count: { type: DataTypes.INTEGER },
})

userModel.hasMany(orderHistoryModel)

productModel.hasMany(orderHistoryModel)
orderHistoryModel.belongsTo(productModel)
//orderHistoryModel.sync({ force: true })

module.exports = { orderHistoryModel }
