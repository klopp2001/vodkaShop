import { useState, createContext, useCallback, useEffect } from "react"
import { baseUrl, getRequest, postRequest } from "../utils/services"

//TODO: cart methods should be added here
export const ShopContext = createContext(null)

export const ShopContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [products, setProducts] = useState([])
  const [productsImages, setProductImages] = useState(null)
  const [productsError, setProductsError] = useState(false)
  const [loadStatus, setLoadStatus] = useState(false)
  const [productCategory, setProductCategory] = useState(null)

  const [isProductPage, setIsProductPage] = useState(false)
  const [productPage, setProductPage] = useState(undefined)

  //const loadProduct
  const loadProductPage = (product) =>{
    setIsProductPage(true)
    setProductPage(product)
  }

  const loadExactProductPage = async (productName) => {
    const response = await getRequest(`${baseUrl}/shop/product/${productName}`)
    loadProductPage(response)        
  }

  const loadProductsInfo = async (category) => {
    const response = await getRequest(`${baseUrl}/shop/products/${category}`)
    if (response.error) {
      setProductsError(true)
    } else {
      setProducts(response)
      setLoadStatus(true)
    }
  }

  const loadProductsImages = useCallback(async (e) => {
    const response = await getRequest(`${baseUrl}/shop/productsImages`)
    if (response.error) {
      setProductsError(true)
    } else {
      setProducts(response)
    }
  })

  const updateProductCategory = useCallback((category) => {
    setProductCategory(category)
    if (loadStatus) setLoadStatus(false)
  })
  const loadProducts = async (category) => {
    if (loadStatus) return
    await loadProductsInfo(category)
  }

  return (
    <ShopContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        products,
        loadProductsInfo,
        loadProductsImages,
        loadStatus,
        setLoadStatus,
        setIsProductPage,
        loadProducts,
        loadProductPage,
        loadExactProductPage,
        productPage,
        updateProductCategory,

        isProductPage,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}
