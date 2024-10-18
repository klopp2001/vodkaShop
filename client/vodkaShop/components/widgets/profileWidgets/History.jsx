import { useLayoutEffect, useState } from "react"
import { Button, Stack } from "react-bootstrap"
import { baseUrl, getRequest } from "../../../utils/services"

function HistoryProduct({ product }) {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={5}
        style={{ width: "100%" }}
        className="justify-content-between"
      >
        <img
          src={`http://localhost:8080/static/images/${product.image}`}
          style={{ maxWidth: "150px", maxHeight: "150px" }}
        />
        <Stack className="justify-content-md-between">
          <Stack>
            <span style={{ fontSize: "22px" }}>{product.name}</span>
            <span style={{ color: "gray" }}>{product.price} ₽</span>
          </Stack>
        </Stack>

        <Stack className="justify-content-md-between align-items-end" gap={4}>
          <div style={{ fontWeight: "bold", fontSize: "24px" }}>400</div>
          <div>
            {/* {product.price * addedProducts[`${product.name}`].count} ₽ */}
          </div>
          <Button variant="danger">Buy Again</Button>
        </Stack>
      </Stack>
    </>
  )
}

function Order({ orderId, date, products }) {
  const [viewOrder, setViewOrder] = useState(false)
  let historyProducts = new Array()
  for (let product of products) {
    historyProducts.push(
      <>
        <HistoryProduct product={product} />
        <hr></hr>
      </>
    )
  }
  return (
    <Stack style={{ marginBottom: "30px" }}>
      <Stack
        style={{
          backgroundColor: "rgb(244, 244, 245)",
          padding: "20px 15px",
          borderRadius: "10px",
        }}
        direction="horizontal"
        className="justify-content-between"
      >
        <div>
          <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
            Order {orderId}
          </div>
          <div>Delivered on {date}</div>
        </div>
        <Button
          onClick={() => {
            setViewOrder(!viewOrder)
          }}
        >
          View order
        </Button>
      </Stack>
      {viewOrder && (
        <div style={{ padding: "20px 90px" }}>{historyProducts}</div>
      )}
    </Stack>
  )
}

export default function History() {
  const [orders, setOrders] = useState(false)
  useLayoutEffect(() => {
    async function fetchData() {
      //let t = 10
      function Order(id, date, products) {
        this.id = id
        this.date = date
        this.products = products
      }
      let orderArray = []
      const userId = JSON.parse(localStorage.getItem("User")).id
      const result = await getRequest(`${baseUrl}/orderHistory/${userId}`)

      let test = {}
      for (let row of result) {
        if (!test[row.orderId]) {
          test[row.orderId] = []
        }
        test[row.orderId].push(row.product)
        //orderArray.push(new Order(row.orderId, row.date, row.products))
      }
      setOrders(orderArray)
    }
    fetchData()
  }, [])

  let orderArray = new Array()
  if (orders) {
    for (let order of orders) {
      orderArray.push(
        <Order orderId={order.id} date={order.date} products={order.products} />
      )
    }
  }

  return (
    <Stack>
      <h1 style={{ padding: "0", margin: "0" }}>History</h1>
      <Stack style={{ marginTop: "40px" }}>{orderArray}</Stack>
    </Stack>
  )
}
