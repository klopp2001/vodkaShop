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
//userModel.hasOne(cartModel)
//productModel.belongsTo(cartModel)

cartModel.belongsTo(userModel, { targetKey: "email", foreignKey: "userEmail" })

//productModel.belongsTo(cartModel)
productModel.hasMany(cartModel, { foreignKey: "productId" })
cartModel.belongsTo(productModel)
//productModel.sync({ force: true })
//cartModel.sync({ force: true })
//productModel.sync()
//cartModel.sync()

module.exports = cartModel
