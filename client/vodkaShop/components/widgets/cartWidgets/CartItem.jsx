import { useContext } from "react"
import { Stack } from "react-bootstrap"

import CartItemChanger from "../../buttons/CartItemChanger"
import { CartContext } from "../../../context/CartContext"
import DropProduct from "../../buttons/DropProduct"

export default function CartItem({ product, image }) {
  const { addedProducts } = useContext(CartContext)
  return (
    <>
      <Stack
        direction="horizontal"
        gap={5}
        style={{ width: "100%" }}
        className="justify-content-between"
      >
        <img
          src={`http://localhost:8080/static/images/${image}`}
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />
        <Stack className="justify-content-md-between">
          <Stack>
            <span style={{ fontSize: "22px" }}>{product.name}</span>
            <span style={{ color: "gray" }}>{product.price} ₽</span>
          </Stack>

          <DropProduct product={product}></DropProduct>
        </Stack>

        <Stack className="justify-content-md-between align-items-end">
          <div style={{ fontWeight: "bold", fontSize: "24px" }}>
            {product.price * addedProducts[`${product.name}`].count} ₽
          </div>
          <CartItemChanger product={product}></CartItemChanger>
        </Stack>
      </Stack>
    </>
  )
}
