import Filters from "../components/Filters"
import { Container, Row, Col } from "react-bootstrap"
import GoodsDisplay from "../components/GoodsDisplay"
import PageButtons from "../components/PageButtons"
import { ShopContext, ShopContextProvider } from "../context/ShopContext"
import { useContext } from "react"
import Product from "./Product"
export default function Shop({ category }) {
  return (
    
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs={2} style={{ padding: 0 }}>
            <Filters />
          </Col>
          <Col
            style={{
              backgroundColor: "rgb(255,255,255)",
              borderRadius: "30px",
            }}
          >
            <GoodsDisplay category={category}></GoodsDisplay>
            
          </Col>
        </Row>
      </Container>

  )
}
