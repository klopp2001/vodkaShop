const sequalize = require("../database")

const { DataTypes } = require("sequelize")

const categoryModel = sequalize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    unique: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  level: { types: DataTypes.INTEGER },
  parentCategory: {
    type: DataTypes.INTEGER,
    references: "categoryModel",
    referencesKey: "id",
  },
})

categoryModel.hasMany(categoryModel)

module.exports = categoryModel
