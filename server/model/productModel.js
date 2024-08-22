const sequalize = require('../database')

const {DataTypes} = require("sequelize")

const productModel = sequalize.define(
  'product', {
    id: {type: DataTypes.INTEGER,  unique: true, primaryKey:true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    rating: {type: DataTypes.DOUBLE},
    description: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING},
    
  }
)


module.exports = productModel

// const productModel = sequalize.define(

// )