//TODO: изменить свойства на объект, когда создам модель бд

import { useContext } from "react";
import {Stack, Card, Form, Button, ListGroup, Image } from "react-bootstrap";
import { ShopContext } from "../context/ShopContext";
import { baseUrl, postRequest } from "../utils/services";


function AddProductToCart(productName, count = 1){
  const user = JSON.parse(localStorage.getItem("User"))
  const validProductName = productName.replace(" ", "_")

  const cartInfo = {
    userEmail: user.email,
    product: validProductName,
    count: count
  }
  postRequest(`${baseUrl}/cart/`, JSON.stringify(cartInfo))
}



export default function ProductCard({product}){
  return (
    <Card style={{width: "200px"}}>
      <Card.Header style={{padding: "5px 2px"}}>
        <Stack direction = "horizontal" className="justify-content-between">
          <Button style={{margin:"0"}}>

          </Button>
          <Button>
          </Button>
        </Stack>
      </Card.Header>
      <ListGroup className="align-items-center">
        <ListGroup.Item style={{padding:"0"}}>
          <Image src={`http://localhost:8080/static/images/${product.product_image.source}`}></Image>
        </ListGroup.Item >
        <ListGroup.Item style={{padding:"0"}}>
          {product.name}
        </ListGroup.Item>
        <ListGroup.Item style={{padding:"0"}}>
          {product.price}
        </ListGroup.Item >
        <ListGroup.Item style={{padding:"0"}}>
          {product.rating}
        </ListGroup.Item>
        <ListGroup.Item>
        <Stack direction = "horizontal" className="justify-content-between">
          <Button style={{margin:"0",padding:"0px 5px"}}>
            +
          </Button>
          <Button style={{margin:"2px",padding:"0px 5px"}}>
            -
          </Button>
          <Button onClick ={ () => AddProductToCart(product.name) }style={{margin:"2px",padding:"0px 5px"}}>
            Add
          </Button>
        </Stack>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}