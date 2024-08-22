import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header/Header";
import {Routes, Router, Route, Navigate} from "react-router-dom";
import About from "../pages/About";
import Shop from "../components/Shop";
import ProductCard from "../components/ProductCard";
import Profile from "../components/Profile";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function App() {
  const {user} = useContext(AuthContext)
  
  console.log(user)
  return (
      <>
        <Header>

        </Header>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<ProductCard/>} />
          <Route path="/profile" element={user? <Profile/>:<Login/>}/>
          <Route path="/register" element={user? <Profile/>: <Register/>}/>
          <Route path="/login" element={user? <Profile/> : <Login/>}/>
        </Routes>

      </>


  );
}

