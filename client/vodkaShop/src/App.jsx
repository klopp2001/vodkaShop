import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header/Header"
import { Routes, Router, Route, Navigate } from "react-router-dom"
import About from "../pages/About"
import Shop from "../pages/Shop"
import ProductCard from "../components/widgets/productWidgets/ProductCard"
import Profile from "../components/widgets/profileWidgets/Profile"
import Register from "../pages/Register"
import Login from "../pages/Login"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import EntryPage from "../pages/EntryPage"
import Cart from "../pages/Cart"
import Product from "../pages/Product"
import FavouriteContextProvider from "../context/FavouriteContext"
import Favourite from "../pages/Favourite"

export default function App() {
  const { user } = useContext(AuthContext)

  console.log(user)
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<EntryPage />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/profile" element={user ? <Profile /> : <Login />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />} />

        <Route path="/register" element={user ? <Profile /> : <Register />} />
        <Route path="/login" element={user ? <Profile /> : <Login />} />
      </Routes>

      <FavouriteContextProvider>
        <Routes>
          <Route
            path="/shop/vodka"
            element={<Shop category={"vodka"}></Shop>}
          />
          <Route path="/shop/beer" element={<Shop category={"beer"}></Shop>} />
          <Route
            path="/shop/whiskey"
            element={<Shop category={"whiskey"}></Shop>}
          />

          <Route path="/shop/product/:name" element={<Product />} />
          <Route
            path="/profile/favourite"
            element={user ? <Favourite /> : <Login />}
          />
        </Routes>
      </FavouriteContextProvider>
    </>
  )
}
