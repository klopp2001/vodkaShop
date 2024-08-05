const sequalize = require("../database")

const {DataTypes} = require("sequelize")

const userModel = sequalize.define(
  'user',{
    id:{type: DataTypes.INTEGER, unique: true, primaryKey: true},
    name:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING},
    password:{type: DataTypes.STRING},
    time:{type: DataTypes.DATE}
  }, {
    timestamps: false
  }
)

module.exports = userModel