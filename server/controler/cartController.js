const cartModel = require("../model/cartModel")
const { productModel } = require("../model/productModel")
const userModel = require("../model/userModel")


const addProductToCart = async (req, res) =>{
  try{
    const {userEmail, product, count} = req.body
    const {user_id} = await userModel.findOne({where: {email: userEmail}, attributes : [['id', 'user_id']], raw: true})
    const {product_id} = await productModel.findOne ({where : {name: product}, attributes: [['id', 'product_id']], raw: true})
    console.log(`user_id ${user_id} pr ${product_id}`)

    const cartRecord = cartModel.create({user_id:user_id, product_id: product_id, count: count})
    return res.status(200).json(cartRecord)
  } catch(error) {
    res.status(500).json(error)
  }
}

const getCart = async (req,res) =>{
  try{
    const {email} = req.params
    const {user_id} = await userModel.findOne({where: {email: email}, attributes : [['id', 'user_id']], raw: true})
    const cartProducts = await cartModel.findAll({where: {user_id: user_id}, include:{model: productModel, attributes: ['name']} })
    return res.status(200).json(cartProducts)
  } catch(error) {
    res.status(500).json(error)
  }
}

module.exports = {addProductToCart, getCart}