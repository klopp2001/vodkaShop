import { useContext, useEffect } from "react"
import FavouriteContextProvider, {
  FavouriteContext,
} from "../context/FavouriteContext"

export default function Favourite() {
  const { favouriteProductsId, loadFavoriteIds } = useContext(FavouriteContext)
  useEffect(() => {
    if (favouriteProductsId.size == 0) loadFavoriteIds()
  }, [])
  console.log(favouriteProductsId)
  return <div>{favouriteProductsId}</div>
}
