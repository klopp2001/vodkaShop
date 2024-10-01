import Filters from "../components/Filters"
import { Container, Row, Col, Stack } from "react-bootstrap"
import GoodsDisplay from "../components/GoodsDisplay"
import PageButtons from "../components/PageButtons"
import { ShopContext, ShopContextProvider } from "../context/ShopContext"
import { useContext } from "react"
import Product from "./Product"
import Catalogue from "./Catalogue"
export default function Shop({ category }) {
  return (
    <Stack gap={5} className = "justify-content-between align-items-start" direction="horizontal">

        <Col xs={3} style={{ padding: 0 }}>
          <Filters />
        </Col>
        {category ?
        <Col
          style={{
            backgroundColor: "rgb(255,255,255)",
            borderRadius: "30px",
          }}
        >
          <GoodsDisplay category={category}></GoodsDisplay>
        </Col> : <Catalogue></Catalogue>
}
    </Stack>
  )
}
