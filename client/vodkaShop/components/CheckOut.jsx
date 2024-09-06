import { Button, Card, Stack } from "react-bootstrap";

export default function CheckOut(){
  return(
    <Card>
      <Card.Header>
        <Stack style={{width:"20rem", minWidth:"24.188rem" ,maxWidth: "24.188rem"}} gap={2}>
          <Button variant="secondary">Adress</Button>
          <Button variant="secondary">Promo</Button>
          <Stack direction="horizontal" className="justify-content-md-between">
            <span>Summ of products</span>
            <span>228</span>
          </Stack>
          <Stack direction="horizontal"className="justify-content-md-between">
            <span>Delivery</span>
            <span>228</span>
          </Stack>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Stack>
          <Stack style = {{marginBottom:"15px"}}direction="horizontal"className="justify-content-md-between">
            <span>Total</span>
            <span>228</span>
          </Stack>
          <Button variant="success">Checkout</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}