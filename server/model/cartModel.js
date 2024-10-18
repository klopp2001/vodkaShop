const sequalize = require("../database")

const { DataTypes } = require("sequelize")

const userModel = require("./userModel")
const { productModel } = require("./productModel")

const cartModel = sequalize.define(
  "carts",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },

    count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
)

cartModel.belongsTo(userModel, { targetKey: "email", foreignKey: "userEmail" })

productModel.hasMany(cartModel, { foreignKey: "productId" })
cartModel.belongsTo(productModel)

module.exports = cartModel
