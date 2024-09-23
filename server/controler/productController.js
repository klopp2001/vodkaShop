const { productModel, productImageModel } = require("../model/productModel")

console.log(productModel)
const getProducts = async (req, res) => {
  console.log(req.params)
  try {
    const products = await productModel.findAll({
      where: { category: req.params.category },
      include: [{ model: productImageModel, attributes: ["source"] }],
    })
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getProduct = async (req, res) => {
  try {
    const products = await productModel.findOne({
      where: { name: req.params.name },
      include: [{ model: productImageModel, attributes: ["source"] }],
    })
    res.status(200).json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const getExactProducts = async (req, res) => {
  try {
    const products = req.body
    const response = await productModel.findAll({
      where: { name: products },
      include: [{ model: productImageModel, attributes: ["source"] }],
    })
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getProductsImages = async (req, res) => {
  // try{
  //   const productImage = await productImageModel.findOne({
  //     raw: true,
  //     attributes: ['product_id', 'source']
  //   });
  //   for (let productImage of productImages){
  //     console.log(productImage.source)
  //   }
  //   res.status(200).json(productImages)
  // } catch(error) {
  //   res.status(500).json(error)
  // }
}

module.exports = {
  getProducts,
  getExactProducts,
  getProductsImages,
  getProduct,
}
