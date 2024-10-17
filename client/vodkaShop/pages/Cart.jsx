import { Stack } from "react-bootstrap"
import CheckOut from "../components/widgets/cartWidgets/CheckOut"
import { useLayoutEffect, useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartProducts from "../components/widgets/cartWidgets/CartProducts"
export default function Cart() {
  const { getCartFromSever, clearCart, addedProducts } = useContext(CartContext)
  useLayoutEffect(() => {
    getCartFromSever()
  }, [])
  return (
    <Stack
      style={{
        backgroundColor: "white",
        margin: "0 9%",
        paddingBottom: "2%",
        borderRadius: "10px",
      }}
      gap={4}
    >
      <Stack
        style={{ marginLeft: "15px", marginRight: "15px" }}
        direction="horizontal"
        className="justify-content-md-between align-items-end"
      >
        <span style={{ fontSize: "40px" }}>Корзина</span>
        <a
          className="a_link"
          style={{ fontSize: "18px" }}
          onClick={() => clearCart()}
        >
          Очистить
        </a>
      </Stack>

      <Stack
        style={{ fontSize: "12px", marginRight: "15px" }}
        direction="horizontal"
      >
        <Stack style={{ padding:"0px 50px", marginLeft: "15px", marginRight: "15px" }} gap={3}>
          <CartProducts products={addedProducts}></CartProducts>
        </Stack>
        <CheckOut></CheckOut>
      </Stack>
    </Stack>
  )
}
