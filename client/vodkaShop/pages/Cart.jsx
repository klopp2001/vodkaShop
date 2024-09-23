import { Stack } from "react-bootstrap"
import CheckOut from "../components/CheckOut"
import CartProduct from "../components/CartItem"
import { useLayoutEffect, useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartProducts from "../components/CartProducts"
export default function Cart() {
  const {getCartFromSever, clearCart} = useContext(CartContext)
  useLayoutEffect(()=>{
    getCartFromSever()
  }, [])
  return (
    <Stack
      style={{ backgroundColor: "white", margin: "0 9%", borderRadius: "10px" }}
      gap={4}
    >
      <Stack
        direction="horizontal"
        className="justify-content-md-between align-items-end"
      >
        <span style={{ fontSize: "40px", marginLeft: "15px" }}>Корзина</span>
        <a
          className="a_link"
          style={{ fontSize: "12px", marginRight: "15px" }}
          onClick={() => clearCart()}
        >
          Очистить
        </a>
      </Stack>

      <Stack
        style={{ fontSize: "12px", marginRight: "15px" }}
        direction="horizontal"
      >
        <Stack gap={5}>
          <CartProducts></CartProducts>
        </Stack>
        <CheckOut></CheckOut>
      </Stack>
    </Stack>
  )
}
