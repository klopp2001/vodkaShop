import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header/Header";
import {Routes, Router, Route, Navigate} from "react-router-dom";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ProductCard from "../components/ProductCard";
import Profile from "../components/Profile";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import EntryPage from "../pages/EntryPage";
import Cart from "../pages/Cart";

export default function App() {
  const {user} = useContext(AuthContext)
  
  console.log(user)
  return (
      <>
        <Header>

        </Header>
        <Routes>
          <Route path="/" element={<EntryPage/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/vodka" element={<Shop category={"vodka"}></Shop>}/>
          <Route path="/shop/beer" element={<Shop category={"beer"}></Shop>}/>
          <Route path="/shop/whiskey" element={<Shop category={"whiskey"}></Shop>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<ProductCard/>} />
          <Route path="/profile" element={user? <Profile/>:<Login/>}/>
          <Route path="/register" element={user? <Profile/>: <Register/>}/>
          <Route path="/login" element={user? <Profile/> : <Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>

      </>


  );
}

