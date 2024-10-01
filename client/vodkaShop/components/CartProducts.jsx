import { useContext, useEffect, useLayoutEffect } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
function Delimiter() {
  return <hr style={{margin:"0px", size:"5px"}}></hr>
}
export default function CartProducts({ products }) {
  let result = new Array()
  const { getCartFromSever, productImages, isLoaded } = useContext(CartContext)

  useLayoutEffect(() => {
    getCartFromSever()
  }, [])

  useEffect(() => {}, [])
  if (!products) return result

  for (let property in products) {
    result.push(
      <CartItem
        product={products[`${property}`].product}
        image={productImages[`${property}`]}
      ></CartItem>
    )
    result.push(<Delimiter></Delimiter>)
  }
  result.pop();
  return result
}
