const userModel = require("../model/userModel")
const sequelize = require("../database") 
const bCrypt = require("bcrypt")
const validator = require("validator")

function isAdult(birthDate){
  const currentDate = Date.now()
  if (currentDate.getFullYear() - birthDate.getFullYear() >= 18 &&
   currentDate.getMonth() - birthDate.getMonth() >= 0 &&
   currentDate.getDay() - birthDate.getDay()){
    return true
   }
  return false
}

const registerUser = async(req, res) => {
  try{
    const {login, email , password, birthDate, phoneNumber} = req.body
    
    let user = userModel.find({where: {email: email}})
    
    if (user)
      res.status(400).json("This email is already exist")

    if (!login || !email || password)
      res.status(400).json("All fields are required")

    if (!validator.isEmail(email))
      res.status(400).json("Email must be a valid email")

    if (!validator.isStrongPassword(password))
      res.status(400).json("Password must be a strong enough")

    if (!isAdult(birthDate)){
      res.status(400).json("You should be adult")
    }

    //TODO:: Проверка на корректность номера (длина, цифры)
     
    const salt = await bCrypt.genSalt(10)
    password = await bCrypt.hash(password, salt)
    user = await userModel.create({login, email, password, time : sequelize.fn('NOW'), birthDate, phoneNumber})

    res.status(200).json({id: user.id, name, email})
  } catch (error){
    console.log(error)
    res.status(500).json(error)
  }
}

const loginUser = async (req,res) => {
  const isValidPassword = await bCrypt.compare(password, user.password)

}

const findUser = async(req, res) => {
  const userId = req.body.userId
  try{
      const user = userModel.findByPk(userId)
      res.status(200).json(user)
  } catch(error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const getUsers = async(req, res) => {
  try{
    const users = await userModel.findAll()
    res.status(200).json(users)
  } catch (error){
    console.log(error)
    res.status(500).json(error)
  }
}

module.exports = {registerUser, loginUser, findUser, getUsers}