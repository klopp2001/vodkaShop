const sequalize = require("../database")

const {DataTypes} = require("sequelize")

const userModel = require("./userModel")
const {productModel} = require("./productModel")


const cartModel = sequalize.define(
  'user_cart', {
    user_cart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: { type:  DataTypes.INTEGER },
    product_id: { type:  DataTypes.INTEGER },
    count: { type:  DataTypes.INTEGER }
  }, {
    timestamps: false
  }
)

cartModel.hasOne(userModel, {foreignKey:"id"})
userModel.belongsTo(cartModel, {foreignKey:"id"})

cartModel.hasMany(productModel, {foreignKey:"id"})
productModel.belongsTo(cartModel, {foreignKey:"id"})

module.exports = cartModel