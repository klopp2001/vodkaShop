const { favouriteModel } = require("..//model//favouriteModel")
const sequelize = require("../database")
const { productModel, productImageModel } = require("../model/productModel")
const userModel = require("../model/userModel")

const getUserFavourite = async (req, res) => {
  try {
    const userId = req.params.id
    const favourite = await favouriteModel.findAll({
      where: { userId: userId },
      attributes: {
        exclude: ["id", "productId"],
      },
      include: [
        {
          model: productModel,
          include: [{ model: productImageModel, attributes: ["source"] }],
        },
      ],
    })
    return res.status(200).json(favourite)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const addToFavourite = async (req, res) => {
  try {
    const { userId, productId } = req.body
    const user = await userModel.findOne({
      where: { id: userId },
    })
    const product = await productModel.findOne({
      where: { id: productId },
    })
    await favouriteModel.create({
      userId: userId,
      productId: productId,
    })

    return res.status(200).json(productId)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

const deleteFromFavourite = async (req, res) => {
  try {
    const { userId, productId } = req.body
    const record = await favouriteModel.findOne({
      where: { userId: userId, productId: productId },
    })
    await record.destroy()
    res.status(200).json({
      message: `product ${productId} from user ${userId} destroyed succsefully`,
    })
  } catch (error) {
    res.status(500).json(productId)
  }
}

module.exports = {
  getUserFavourite,
  addToFavourite,
  deleteFromFavourite,
}
