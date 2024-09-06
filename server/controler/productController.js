const {productModel, productImageModel} = require ('../model/productModel')
console.log(productModel)
const getProducts = async (req, res) => {
  console.log(req.params)
  try{
    const products = await productModel.findAll({where:{category: req.params.category},
      include:[{model: productImageModel, attributes: ['source']}]
    });
    res.status(200).json(products)
  } catch (error){
    res.status(500).json(error)
  }
}

const getProduct = async (req, res) => {
  try{ 
    const products = await productModel.findAll({where:{category: req.params.name},
      include:[{model: productImageModel, attributes: ['source']}]
    });
    res.status(200).json(products)
  } catch (error){
    res.status(500).json(error)
  }
}

const getProductsImages = async (req, res) => {
  // try{
  //   const productImages = await productImageModel.findAll({
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

module.exports = {getProducts, getProductsImages, getProduct}