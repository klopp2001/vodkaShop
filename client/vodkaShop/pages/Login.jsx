import { useContext } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

export default function Login(){
  const inputStyle = {
    width:"80%", alignSelf:"center",
  }
  const {loginInfo} = useContext(AuthContext)
  return(
    <>
      <Form style={{marginTop:"25px", }} >
          <Stack style = {{backgroundColor:"rgb(220, 220, 220)"}} className='col-md-5 mx-auto' gap={4}>
            <Form.Control style = {{width:"80%", alignSelf:"center", marginTop:"15px"}} placeholder={"Login"} onChange={()=>{}} >

            </Form.Control>

            <Form.Control style = {inputStyle} placeholder={"Password"} onChange={()=>{}}>

            </Form.Control>

            <Button variant="secondary" style = {inputStyle}>Войти</Button>
            <div style = {{ width:"80%", alignSelf:"center"}}>
              <div style = {{fontSize:"17px"}}>Вы не зарегистрированы?</div>
              <Button href = "/register" variant="dark" style = {{ width:"100%", alignSelf:"center", marginBottom:"15px"}}>Зарегистрироваться</Button>
            </div>
            
          </Stack>
          
      </Form>

    </>
  )
}