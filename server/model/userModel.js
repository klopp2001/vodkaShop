const sequalize = require("../database")

const { DataTypes } = require("sequelize")

const userModel = sequalize.define(
  "users",
  {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    time: { type: DataTypes.DATE },
    birthDate: { type: DataTypes.DATE },
    phoneNumber: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
)
//userModel.sync({force:true})
module.exports = userModel
