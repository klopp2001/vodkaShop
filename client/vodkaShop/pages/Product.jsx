import { useCallback, useContext, useLayoutEffect } from "react"
import { Breadcrumb, Button, Col, Container, Row, Stack } from "react-bootstrap"
import { ShopContext } from "../context/ShopContext"
import AddToCart from "../components/buttons/AddToCart"
import { useParams, useSearchParams } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function ParseCategory(category) {
  switch (category) {
    case "vodka":
      return "Водка"
    case "beer":
      return "Пиво"
    default:
      return ""
  }
}

export default function Product() {
  const { productPage, loadExactProductPage } = useContext(ShopContext)
  const { getCartFromSever } = useContext(CartContext)
  const { name } = useParams()
  //TODO:: оптимизировать
  if (productPage == undefined || productPage.name != name) {
    loadExactProductPage(name)
  }
  useLayoutEffect(() => {
    getCartFromSever()
  }, [])
  console.log(productPage)
  return (
    <>
      {productPage && (
        <Container style={{ margin: "30px 50px" }}>
          <Row>
            <Breadcrumb>
              <Breadcrumb.Item
                href={`/shop/`}
                style={{ color: "red" }}
                id="product__menu"
              >
                Главная
              </Breadcrumb.Item>
              <Breadcrumb.Item
                href={`/shop/${productPage.category}`}
                style={{ color: "red" }}
                id="product__menu"
              >
                {ParseCategory(productPage.category)}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/shop" active>
                {productPage.name}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col xs={5}>
              <img
                style={{ marginLeft: "40px" }}
                src={`http://localhost:8080/static/images/${productPage.product_image.source}`}
              ></img>
            </Col>
            <Col>
              <Stack>
                <p>Рейтинг: {productPage.rating}</p>
                <p style={{ fontSize: "1.7rem" }}>{productPage.name}</p>
                <p style={{ margin: "0" }}>Цена</p>
                <p style={{ fontSize: "1.7rem" }}>{productPage.price} р</p>
                <p>{productPage.description}</p>
                <div style={{ maxWidth: "1000px" }}>
                  <AddToCart product={productPage} />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}
