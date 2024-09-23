import { useContext, useLayoutEffect, useState } from "react"
import { Stack, Button, Container } from "react-bootstrap"
import { ShopContext } from "../context/ShopContext"
import AddToCart from "./buttons/AddToCart"
import CartItemChanger from "./buttons/CartItemChanger"
import { CartContext } from "../context/CartContext"

export default function CartItem({ product, image }) {
  const { addedProducts } = useContext(CartContext)
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        style={{ marginLeft: "15px", marginRight: "15px" }}
      >
        <img
          src={`http://localhost:8080/static/images/${image}`}
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />

        <Stack style={{ width: "100%" }} direction="horizontal">
          <Stack className="justify-content-md-between">
            <span>{product.name}</span>
            <span>{product.price}</span>

            <Button style={{ width: "5%" }}>del</Button>
          </Stack>

          <Stack className="justify-content-md-between">
            <div>{product.price * addedProducts[`${product.name}`].count}</div>
            <CartItemChanger product={product}></CartItemChanger>
            {/* <AddToCart product={product}></AddToCart> */}
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
