import { useContext, useEffect, useLayoutEffect } from "react"
import FavouriteContextProvider, {
  FavouriteContext,
} from "../context/FavouriteContext"
import { Breadcrumb } from "react-bootstrap"
import GoodsDisplay from "../components/widgets/catalogueWidgets/GoodsDisplay"
import { FavouriteProducts } from "../components/widgets/profileWidgets/FavouriteProducts"

export default function Favourite() {
  const { favouriteProducts, loadFavouriteInfo, loadFavoriteIds } =
    useContext(FavouriteContext)
  useLayoutEffect(() => {
    loadFavouriteInfo()
    loadFavoriteIds()
  }, [])
  console.log(`this is fp ${favouriteProducts}`)
  return (
    <>
      <Breadcrumb id="breadnew">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Favourite</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Favourite</h1>
      <FavouriteProducts />
    </>
  )
}
