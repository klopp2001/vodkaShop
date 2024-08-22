const express = require('express')
const {registerUser, loginUser, findUser, getUsers} = require('../controler/userController')
const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/', getUsers)

userRouter.get('/prikol', (req,res) => {
  return res.status(400).json({name: "hello"})
})

module.exports = userRouter