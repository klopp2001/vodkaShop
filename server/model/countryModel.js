const sequalize = require("../database")

const { DataTypes } = require("sequelize")

const countryModel = sequalize.define("country", {
  id: { type: DataTypes.INTEGER, unique: true, primaryKey: true },
  name: { type: DataTypes.STRING },
})
