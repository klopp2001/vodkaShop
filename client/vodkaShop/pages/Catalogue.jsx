import { Col, Container, Row } from "react-bootstrap"
function CategoryItem({ category, url, children }) {
  return (
    <div className="catalogue__item">
      <div className="image_holder">
        <img
          className="catalogue__image"
          src={`http://localhost:8080/static/images/${category}.png`}
        ></img>
      </div>
      <div className="catalogue__category">{children}</div>
    </div>
  )
}
export default function Catalogue() {
  return (
    <Container
      style={{
        backgroundColor: "rgb(255,255,255)",
        borderRadius: "30px",
      }}
    >
      <Row>
        <Col>
          <a href="/shop/vodka">
            <CategoryItem category="vodka">Водка</CategoryItem>
          </a>
        </Col>
        <Col>
          <a href="/shop/beer">
            <CategoryItem category="beer">Пиво</CategoryItem>
          </a>
        </Col>
        <Col>
          <CategoryItem category="whiskey">Виски</CategoryItem>
        </Col>
      </Row>
      <Row>
        <Col>
          <CategoryItem category="vodka">Водка</CategoryItem>
        </Col>
        <Col>
          <CategoryItem category="beer">Пиво</CategoryItem>
        </Col>
        <Col>
          <CategoryItem category="whiskey">Виски</CategoryItem>
        </Col>
      </Row>
      <Row>
        <Col>
          <CategoryItem category="vodka">Водка</CategoryItem>
        </Col>
        <Col>
          <CategoryItem category="beer">Пиво</CategoryItem>
        </Col>
        <Col>
          <CategoryItem category="whiskey">Виски</CategoryItem>
        </Col>
      </Row>
      <Row>
        <Col>
          <CategoryItem category="vodka">Водка</CategoryItem>
        </Col>
        <Col>
          <CategoryItem category="beer">Пиво</CategoryItem>
        </Col>
        <Col>
          <CategoryItem category="whiskey">Виски</CategoryItem>
        </Col>
      </Row>
    </Container>
  )
}
