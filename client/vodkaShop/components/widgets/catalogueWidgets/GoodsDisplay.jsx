import { Container, Row, Col } from "react-bootstrap"
import ProductCard from "../productWidgets/ProductCard"
import { useContext, useLayoutEffect } from "react"
import { ShopContext } from "../../../context/ShopContext"
import { CartContext, CartContextProvider } from "../../../context/CartContext"
import Products from "./Products"
import Product from "../../../pages/Product"
import FavouriteContextProvider, {
  FavouriteContext,
} from "../../../context/FavouriteContext"

export function FavouriteGoodsDisplay({ userId }) {
  const { isProductPage, loadProducts, loadFavouriteInfo, loadStatus } =
    useContext(ShopContext)
  useLayoutEffect(() => {
    if (!loadStatus) {
      loadProducts(userId)
    }
  }, [])

  return <Products />
}

export default function GoodsDisplay({ category }) {
  const { isProductPage, loadProducts, loadStatus } = useContext(ShopContext)
  const { loadFavoriteIds } = useContext(FavouriteContext)
  useLayoutEffect(() => {
    if (!loadStatus) {
      loadProducts(category)
      loadFavoriteIds()
    }
  }, [])

  return <Products />
}
