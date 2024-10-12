const sequelize = require("../database")
const { DataTypes } = require("sequelize")
const userModel = require("./userModel")
const { productModel } = require("./productModel")
const { sync } = require("sequelize/lib/model")

const favouriteModel = sequelize.define(
  "favouriteProduct",
  {},
  {
    timestamps: false,
  }
)

userModel.belongsToMany(productModel, { through: favouriteModel })
productModel.belongsToMany(userModel, { through: favouriteModel })
favouriteModel.belongsTo(productModel, { foreignKey: "productId" })
favouriteModel.belongsTo(userModel, { foreignKey: "userId" })
//favouriteModel.sync()
module.exports = { favouriteModel }
