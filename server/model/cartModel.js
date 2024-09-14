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
    user_email: {
      type: DataTypes.STRING,
      references: {
        model: userModel,
        key: "email",
      },
    },
    product_name: {
      type: DataTypes.STRING,
      references: {
        model: productModel,
        key: "name",
      },
    },
    count: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
)

// userModel.belongsToMany(productModel, { through: cartModel })
// productModel.belongsToMany(userModel, { through: cartModel })

// cartModel.hasMany(userModel, { foreignKey: "email" })
// userModel.belongsTo(cartModel, { foreignKey: "email" })

// cartModel.hasMany(productModel, { foreignKey: "id" })
// productModel.belongsTo(cartModel, { foreignKey: "id" })

module.exports = cartModel
