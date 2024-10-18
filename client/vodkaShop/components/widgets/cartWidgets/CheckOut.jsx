import { Button, Card, Stack } from "react-bootstrap"
import { baseUrl, postRequest } from "../../../utils/services"

export default function CheckOut({ products }) {
  return (
    <Card
      style={{ width: "25rem", minWidth: "14.188rem", maxWidth: "20.188rem" }}
    >
      <Card.Header>
        <Stack gap={2}>
          <Button variant="secondary">Adress</Button>
          <Button variant="secondary">Promo</Button>
          <Stack direction="horizontal" className="justify-content-md-between">
            <span>Summ of products</span>
            <span>228</span>
          </Stack>
          <Stack direction="horizontal" className="justify-content-md-between">
            <span>Delivery</span>
            <span>228</span>
          </Stack>
        </Stack>
      </Card.Header>
      <Card.Body>
        <Stack>
          <Stack
            style={{ marginBottom: "15px" }}
            direction="horizontal"
            className="justify-content-md-between"
          >
            <span>Total</span>
            <span>228</span>
          </Stack>
          <Button
            onClick={() => {
              const userId = JSON.parse(localStorage.getItem("User")).id
              const addedProducts = products
              const body = {
                userId: userId,
                products: addedProducts,
              }
              postRequest(`${baseUrl}/orderHistory/`, JSON.stringify(body))
            }}
            variant="success"
          >
            Checkout
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}
