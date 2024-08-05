const Sequelize = require("sequelize")
console.log(process.env.DB_NAME)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DIALECT)
console.log(process.env.DB_HOST)
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER,
  process.env.DB_PASSWORD,{
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST
})

module.exports = sequelize