import { useContext, useLayoutEffect } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"

export default function CartProducts() {
  let products = new Array()
  const { getCartFromSever, addedProducts,productImages, isLoaded } = useContext(CartContext)

  useLayoutEffect(() => {
    getCartFromSever()
  }, [])

  if (isLoaded) {
    for (let property in addedProducts) {
      products.push(
        <CartItem
          image={productImages[property]}
          productName={property}
          count={addedProducts[property]}
        ></CartItem>
      )
    }
    return products
  }
}
