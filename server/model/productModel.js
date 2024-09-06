const sequalize = require('../database')

const {DataTypes} = require("sequelize")

const productModel = sequalize.define(
  'products', {
    id: {type: DataTypes.INTEGER,  unique: true, primaryKey:true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    rating: {type: DataTypes.DOUBLE},
    description: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING},
    
  },  {
    timestamps: false
  }
)

const productImageModel = sequalize.define(
  'product_image', {
    product_image_id: {type: DataTypes.INTEGER, unique:true, primaryKey: true},
    source: {type: DataTypes.STRING},
    product_id: {
      type: DataTypes.INTEGER, 
    }
  },  {
    timestamps: false
  }
)

//productImageModel.hasOne(productModel)
productImageModel.hasOne(productModel, {foreignKey: "id"})
productModel.belongsTo(productImageModel, {foreignKey: "id"})
module.exports = {productModel, productImageModel,}

// const productModel = sequalize.define(

// )