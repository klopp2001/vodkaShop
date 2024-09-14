import { createContext, useCallback, useState } from "react"
import { postRequest, getRequest, baseUrl } from "../utils/services"

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
  const [addedProducts, setAddedToCart] = useState({})
  const [productImages, setProductImages] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  const addProductToCart = useCallback((productName) => {
    if (addedProducts[productName]) {
      setAddedToCart({
        ...addedProducts,
        [productName]: addedProducts[productName] + 1,
      })
    } else {
      setAddedToCart({
        ...addedProducts,
        [productName]: 1,
      })
    }
  })

  const decreaseProductFromCart = useCallback((productName) => {
    setAddedToCart({
      ...addedProducts,
      [productName]: addedProducts[productName] - 1,
    })
  })


  const clearCart = useCallback(async () => {
    const user = JSON.parse(localStorage.getItem("User"))
    await postRequest(`${baseUrl}/cart/clear`, JSON.stringify(user))
    setAddedToCart({})
  })

  const amountOfProductInCart = useCallback((productName) => {
    return addedProducts[productName]
  })

  const sendCartToServer = useCallback((productName, isAdded = true) => {
    const user = JSON.parse(localStorage.getItem("User"))

    const cartInfo = {
      userEmail: user.email,
      productName: productName,
    }

    if (isAdded) {
      postRequest(`${baseUrl}/cart/`, JSON.stringify(cartInfo))
    } else {
      postRequest(`${baseUrl}/cart/delete`, JSON.stringify(cartInfo))
    }
  })

  const getCartFromSever = useCallback(async () => {
    const user = JSON.parse(localStorage.getItem("User"))
    const response = await getRequest(`${baseUrl}/cart/${user.email}`)
    let cart = {}
    let images = {}
    for (let product of response) {
      cart[`${product.product_name}`] = product.count
      let pr = await getRequest(
        `${baseUrl}/shop/product/${product.product_name}`
      )
      images[`${product.product_name}`] = pr.product_image.source
    }

    setAddedToCart(cart)

    setProductImages(images)
    setIsLoaded(true)
    return response
  })
  return (
    <CartContext.Provider
      value={{
        addedProducts,
        addProductToCart,
        decreaseProductFromCart,
        productImages,
        amountOfProductInCart,
        sendCartToServer,
        getCartFromSever,
        clearCart,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
