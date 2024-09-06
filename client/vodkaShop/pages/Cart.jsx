import { Stack } from "react-bootstrap";
import CheckOut from "../components/CheckOut";
import CartProduct from "../components/CartProduct";
import { useState, useLayoutEffect } from "react";
import { baseUrl, getRequest } from "../utils/services";
export default function  Cart(){
  const [cart, setCart] = useState(null)
  const loadCart = async () => {    
    const user = localStorage.getItem('User')
    const response = await getRequest(`${baseUrl}/cart/${user.email}`)
    setCart(response)
  }
  loadCart()
  // useLayoutEffect(()=>{
  // },[])

  return(
    <>
    <Stack style={{backgroundColor:"white", }} gap={4}>
      <Stack direction="horizontal" className="justify-content-md-between align-items-end">
        <span style={{fontSize:"24px", marginLeft:"15px"}}>Корзина</span>
        <a className="a_link" style={{fontSize:"12px", marginRight:"15px"}}>Очистить</a>
      </Stack>

      <Stack style={{fontSize:"12px", marginRight:"15px"}} direction="horizontal">
        <Stack>
          <CartProduct></CartProduct>
        </Stack>
        <CheckOut></CheckOut>
      </Stack>
    </Stack>
    </>
  )
}