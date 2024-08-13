import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/header/Header";
import {Routes, Router, Route, Navigate} from "react-router-dom";
import About from "../pages/About";
import Shop from "../components/Shop";
import ProductCard from "../components/ProductCard";

export default function App() {
  return (
      <>
        <Header>

        </Header>
        <Routes>
          <Route path = "/" element = {<Shop/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/product" element = {<ProductCard/>} />
          
        </Routes>

      </>


  );
}

