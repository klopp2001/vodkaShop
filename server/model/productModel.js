const sequalize = require("../database")

const { DataTypes } = require("sequelize")

const productModel = sequalize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    rating: { type: DataTypes.DOUBLE },
    description: { type: DataTypes.STRING },
    country: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
)

const productImageModel = sequalize.define(
  "product_images",
  {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    source: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
)

productModel.hasOne(productImageModel)

productImageModel.belongsTo(productModel, {
  targetKey: "id",
  foreignKey: "productId",
})
//productModel.sync()
module.exports = { productModel, productImageModel }
