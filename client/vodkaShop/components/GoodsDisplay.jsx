import {Container, Row, Col} from "react-bootstrap"
import ProductCard from "./ProductCard"
export default function GoodsDisplay(){
  return (
      <Container>
        <Row>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
 
        </Row>
        <Row>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
 
        </Row>
        <Row>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
 
        </Row>
        <Row>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
          <Col>
            <ProductCard/>
          </Col>
 
        </Row>
 
      </Container>

  )
}