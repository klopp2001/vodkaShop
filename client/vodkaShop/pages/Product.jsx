import { useCallback, useContext, useLayoutEffect } from "react"
import { Breadcrumb, Button, Col, Container, Row, Stack } from "react-bootstrap"
import { ShopContext } from "../context/ShopContext"
import AddToCart from "../components/buttons/AddToCart"
import { useParams, useSearchParams } from "react-router-dom"
import { CartContext } from "../context/CartContext"

function StarSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      color="rgba(250,219,20,255)"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  )
}

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
    <div style={{ backgroundColor: "white", padding: "50px 250px" }}>
      {productPage && (
        <Container style={{}}>
          <Row>
            <Col>
              {" "}
              <img
                style={{ marginLeft: "40px" }}
                src={`http://localhost:8080/static/images/${productPage.product_image.source}`}
              ></img>
            </Col>
            <Col>
              <Stack>
                <Breadcrumb>
                  <Breadcrumb.Item
                    href={`/shop/`}
                    style={{ color: "red" }}
                    id="breadnew"
                  >
                    Главная
                  </Breadcrumb.Item>
                  <Breadcrumb.Item
                    href={`/shop/${productPage.category}`}
                    style={{ color: "red" }}
                    id="breadnew"
                  >
                    {ParseCategory(productPage.category)}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/shop" active>
                    {productPage.name}
                  </Breadcrumb.Item>
                </Breadcrumb>

                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {productPage.name}
                </p>
                {/* <p>{productPage.description}</p> */}
                <p style={{ color: "grey", fontSize: "0.7rem" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Stack
                  direction="horizontal"
                  className="justify-content-between"
                >
                  <span style={{ fontSize: "1.7rem" }}>
                    ₽{productPage.price}
                  </span>
                  <Stack direction="horizontal">
                    <StarSvg />
                    <span> {productPage.rating}</span>
                    <a
                      href=""
                      style={{ color: "gray", textDecoration: "underline" }}
                    >
                      (See all reviews)
                    </a>
                  </Stack>
                </Stack>
                <hr></hr>
                <div style={{ maxWidth: "1000px" }}>
                  <AddToCart product={productPage} />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}
