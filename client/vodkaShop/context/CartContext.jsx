import { createContext, useCallback, useState } from "react"
import { postRequest, getRequest, baseUrl } from "../utils/services"

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
  const [addedProducts, setAddedToCart] = useState(undefined)
  const [productImages, setProductImages] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  const addProductToCart = useCallback((product) => {
    if (addedProducts[`${product.name}`]) {
      setAddedToCart({
        ...addedProducts,
        [`${product.name}`]: {
          product: product,
          count: addedProducts[`${product.name}`].count + 1,
        },
      })
    } else {
      setAddedToCart({
        ...addedProducts,
        [`${product.name}`]: {
          product: product,
          count: 1,
        },
      })
    }
  })

  const decreaseProductFromCart = useCallback((product) => {
    setAddedToCart({
      ...addedProducts,
      [`${product.name}`]: {
        product: product,
        count: addedProducts[`${product.name}`].count - 1,
      },
    })
  })

  const dropProduct = useCallback(async (product) => {
    const user = JSON.parse(localStorage.getItem("User"))
    const cartInfo = {
      userEmail: user.email,
      productId: product.id,
    }
    const productName = product.name
    let { [product.name]: t, ...rest } = addedProducts
    //delete temp[`${product.name}`]
    postRequest(`${baseUrl}/cart/drop`, JSON.stringify(cartInfo))
    setAddedToCart(rest)
  })

  const clearCart = useCallback(async () => {
    const user = JSON.parse(localStorage.getItem("User"))
    await postRequest(`${baseUrl}/cart/clear`, JSON.stringify(user))
    setAddedToCart({})
  })

  const amountOfProductInCart = useCallback((productName) => {
    return addedProducts[productName]
  })

  const sendCartToServer = useCallback((productId, isAdded = true) => {
    const user = JSON.parse(localStorage.getItem("User"))
    //TODO:: productId
    const cartInfo = {
      userEmail: user.email,
      productId: productId,
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
    for (let productRes of response) {
      cart[`${productRes.product.name}`] = {
        product: productRes.product,
        count: productRes.count,
        // price: product.price,
      }

      productRes.count
      let pr = await getRequest(
        `${baseUrl}/shop/product/${productRes.product.name}`
      )
      images[`${productRes.product.name}`] = pr.product_image.source
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
        dropProduct,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
