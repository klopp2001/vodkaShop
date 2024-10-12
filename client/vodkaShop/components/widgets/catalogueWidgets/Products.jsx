import { useContext, useLayoutEffect } from "react"
import { ShopContext } from "../../../context/ShopContext"
import { CartContext } from "../../../context/CartContext"
import { Col, Container, Row } from "react-bootstrap"
import ProductCard from "../productWidgets/ProductCard"
import PageButtons from "../../buttons/PageButtons"

export default function Products() {
  const { loadStatus, loadFavouriteIndo, products, currentPage } =
    useContext(ShopContext)
  const { getCartFromSever } = useContext(CartContext)

  useLayoutEffect(() => {
    getCartFromSever()
  }, [])

  return (
    <Container>
      {loadStatus && (
        <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Col>
            {products[currentPage * 16 + 0] && (
              <ProductCard product={products[currentPage * 16 + 0]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 1] && (
              <ProductCard product={products[currentPage * 16 + 1]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 2] && (
              <ProductCard product={products[currentPage * 16 + 2]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 3] && (
              <ProductCard product={products[currentPage * 16 + 3]} />
            )}
          </Col>
        </Row>
      )}
      {loadStatus && (
        <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Col>
            {products[currentPage * 16 + 4] && (
              <ProductCard product={products[currentPage * 16 + 4]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 5] && (
              <ProductCard product={products[currentPage * 16 + 5]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 6] && (
              <ProductCard product={products[currentPage * 16 + 6]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 7] && (
              <ProductCard product={products[currentPage * 16 + 7]} />
            )}
          </Col>
        </Row>
      )}
      {loadStatus && (
        <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Col>
            {products[currentPage * 16 + 8] && (
              <ProductCard product={products[currentPage * 16 + 8]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 9] && (
              <ProductCard product={products[currentPage * 16 + 9]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 10] && (
              <ProductCard product={products[currentPage * 16 + 10]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 11] && (
              <ProductCard product={products[currentPage * 16 + 11]} />
            )}
          </Col>
        </Row>
      )}
      {loadStatus && (
        <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
          <Col>
            {products[currentPage * 16 + 12] && (
              <ProductCard product={products[currentPage * 16 + 12]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 13] && (
              <ProductCard product={products[currentPage * 16 + 13]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 14] && (
              <ProductCard product={products[currentPage * 16 + 14]} />
            )}
          </Col>
          <Col>
            {products[currentPage * 16 + 15] && (
              <ProductCard product={products[currentPage * 16 + 15]} />
            )}
          </Col>
        </Row>
      )}
      <PageButtons btnSize={5}></PageButtons>
    </Container>
  )
}
