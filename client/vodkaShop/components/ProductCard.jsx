//TODO: изменить свойства на объект, когда создам модель бд

import {Stack, Card, Form, Button, ListGroup, Image } from "react-bootstrap";

//{productImage, price, info, quality} args

export default function ProductCard(){
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
          <Image src="../src/assets/vodka.jpg"></Image>
        </ListGroup.Item >
        <ListGroup.Item style={{padding:"0"}}>
          Название
        </ListGroup.Item>
        <ListGroup.Item style={{padding:"0"}}>
          Цена
        </ListGroup.Item >
        <ListGroup.Item style={{padding:"0"}}>
          Оценка
        </ListGroup.Item>
        <ListGroup.Item>
        <Stack direction = "horizontal" className="justify-content-between">
          <Button style={{margin:"0",padding:"0px 5px"}}>
            +
          </Button>
          <Button style={{margin:"2px",padding:"0px 5px"}}>
            -
          </Button>
          <Button style={{margin:"2px",padding:"0px 5px"}}>
            Add
          </Button>
        </Stack>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}