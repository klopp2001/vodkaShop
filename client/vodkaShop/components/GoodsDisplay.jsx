import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"
import { useContext, useLayoutEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { CartContext, CartContextProvider } from "../context/CartContext"
import Products from "./Products"
import Product from "../pages/Product"

export default function GoodsDisplay({ category }) {
  const { isProductPage, loadProducts, loadStatus } = useContext(ShopContext)
  useLayoutEffect(() => {
    if (!loadStatus) {
      loadProducts(category)
    }
  }, [])

  return <Products />
}
