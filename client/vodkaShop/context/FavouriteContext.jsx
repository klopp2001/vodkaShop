import { createContext, useState } from "react"
import { baseUrl, getRequest, postRequest } from "../utils/services"

export const FavouriteContext = createContext()

export default function FavouriteContextProvider({ children }) {
  const [favouriteProducts, setFavouriteProducts] = useState(undefined)
  const [favouriteProductsId, setFavouriteProductsId] = useState(new Set())

  const loadFavouriteInfo = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("User")).id
      const favouriteInfo = await getRequest(`${baseUrl}/favourite/${userId}`)
      let res = []
      for (let item of favouriteInfo) {
        res.push(item.product)
      }
      setFavouriteProducts(res)
    } catch (error) {
      console.log(error)
    }
  }

  const loadFavoriteIds = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("User")).id
      const favouriteInfo = await getRequest(`${baseUrl}/favourite/${userId}`)
      let res = new Set()
      for (let record of favouriteInfo) {
        res.add(record.product.id)
      }
      setFavouriteProductsId(res)
    } catch (error) {
      console.log(error)
    }
  }

  const loadFavouriteProducts = async () => {
    const userId = JSON.parse(localStorage.getItem("User")).id
    const response = await getRequest(`${baseUrl}/favourite`, userId)
    setFavouriteProducts(response)
  }

  const addFavouriteProduct = async (userId, productId) => {
    try {
      await postRequest(
        `${baseUrl}/favourite/add`,
        JSON.stringify({
          userId,
          productId,
        })
      )
      let temp = new Set(favouriteProductsId)
      temp.add(productId)
      setFavouriteProductsId(temp)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteFavouriteProduct = async (userId, productId) => {
    await postRequest(
      `${baseUrl}/favourite/delete`,
      JSON.stringify({
        userId,
        productId,
      })
    )
    let temp = new Set(favouriteProductsId)
    temp.delete(productId)
    setFavouriteProductsId(temp)
  }

  return (
    <FavouriteContext.Provider
      value={{
        deleteFavouriteProduct,
        addFavouriteProduct,
        loadFavouriteProducts,
        loadFavoriteIds,
        loadFavouriteInfo,
        favouriteProducts,
        favouriteProductsId,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}
