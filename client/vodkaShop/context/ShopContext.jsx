import { useState, createContext, useCallback, useEffect } from "react"
import { baseUrl, getRequest } from "../utils/services"

//TODO: cart methods should be added here
export const ShopContext = createContext(null)

export const ShopContextProvider = ({children}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [products, setProducts] = useState([])
  const [productsImages, setProductImages] = useState(null)
  const [productsError, setProductsError] = useState(false)
  const [loadStatus, setLoadStatus] = useState(false)
  const [productCategory, setProductCategory] = useState(null)
  const loadProductsInfo = async (category) =>{
    //e.preventDefault()
    const response = await getRequest(`${baseUrl}/shop/products/${category}`) 
    if (response.error){
      setProductsError(true)
    } else {
      setProducts(response)
    }    
  }
  
  const loadProductsImages = useCallback( async (e) =>{
    //e.preventDefault()
    const response = await getRequest(`${baseUrl}/shop/productsImages`)
    if (response.error){
      setProductsError(true)
    } else {
      setProducts(response)
    }    
  }) 

  const updateProductCategory = useCallback ( (category)=>{
    setProductCategory(category)
    if (loadStatus)
      setLoadStatus(false)
   }

  )
  const loadProducts = async (category)=>{
    await loadProductsInfo(category)
    //await loadProductsImages()
    //console.log(productsImages)
    setLoadStatus(true)
  } 
  // useEffect(()=>{
  //   loadProductsInfo()
  // }, [])
  return (<ShopContext.Provider value={{
    currentPage,
    setCurrentPage,
    products,
    loadProductsInfo,
    loadProductsImages,
    loadStatus,
    setLoadStatus,
    loadProducts,
    updateProductCategory,
  }}>
    {children}
  </ShopContext.Provider>
  )
}