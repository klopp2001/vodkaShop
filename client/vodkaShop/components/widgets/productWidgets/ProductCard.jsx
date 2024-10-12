//TODO: изменить свойства на объект, когда создам модель бд

import { useContext, useLayoutEffect, useState } from "react"
import {
  Stack,
  Card,
  Form,
  Button,
  ListGroup,
  Image,
  ButtonGroup,
} from "react-bootstrap"
import { ShopContext } from "../../../context/ShopContext"
import { baseUrl, postRequest } from "../../../utils/services"
import { CartContext } from "../../../context/CartContext"
import Shop from "../../../pages/Shop"
import AddToCart from "../../buttons/AddToCart"
import { FavouriteContext } from "../../../context/FavouriteContext"

// function addProductCartToServer(productName) {
//   const user = JSON.parse(localStorage.getItem("User"))

//   const cartInfo = {
//     userEmail: user.email,
//     productName: productName,
//   }
//   postRequest(`${baseUrl}/cart/`, JSON.stringify(cartInfo))
// }

// function deleteProductCartFromServer(productName) {
//   const user = JSON.parse(localStorage.getItem("User"))

//   const cartInfo = {
//     userEmail: user.email,
//     productName: productName,
//   }
//   postRequest(`${baseUrl}/cart/delete`, JSON.stringify(cartInfo))
// }
function HeartLogo({ productId }) {
  const { favouriteProductsId, addFavouriteProduct, deleteFavouriteProduct } =
    useContext(FavouriteContext)
  console.log(`this is ${productId}`)
  console.log(favouriteProductsId.has(productId))
  console.log(favouriteProductsId)
  return (
    <>
      {favouriteProductsId.has(productId) ? (
        <img
          src="../../src/assets/heart-filled.svg"
          style={{ height: "10%", width: "10%", cursor: "pointer" }}
          onClick={() =>
            deleteFavouriteProduct(
              JSON.parse(localStorage.getItem("User")).id,
              productId
            )
          }
        />
      ) : (
        <img
          src="../../src/assets/heart.svg"
          style={{ height: "10%", width: "10%", cursor: "pointer" }}
          onClick={() =>
            addFavouriteProduct(
              JSON.parse(localStorage.getItem("User")).id,
              productId
            )
          }
        />
      )}
    </>
  )
}

export default function ProductCard({ product }) {
  const { loadProductPage, addFavouriteProduct } = useContext(ShopContext)
  const buttonStyle = {
    width: "30px",
    height: "30px",
    padding: "5px",
  }
  return (
    <Card style={{ width: "200px", height: "400px" }}>
      <Card.Header style={{ padding: "5px 2px" }}>
        <Stack direction="horizontal" className="justify-content-end">
          <HeartLogo productId={product.id}></HeartLogo>
        </Stack>
      </Card.Header>
      <ListGroup className="align-items-center ">
        <ListGroup.Item style={{ padding: "0" }} className="border-0">
          <a href={`product/${product.name}`}>
            <Image
              style={{ cursor: "pointer" }}
              onClick={() => loadProductPage(product)}
              src={`http://localhost:8080/static/images/${product.product_image.source}`}
            ></Image>
          </a>
        </ListGroup.Item>
        <ListGroup.Item style={{ padding: "0" }} className="border-0">
          {product.name}
        </ListGroup.Item>
        <ListGroup.Item style={{ padding: "0" }} className="border-0">
          {product.price}
        </ListGroup.Item>
        <ListGroup.Item style={{ padding: "0" }} className="border-0">
          {product.rating}
        </ListGroup.Item>
        <ListGroup.Item className="border-0" style={{ padding: "0" }}>
          <AddToCart product={product}></AddToCart>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
