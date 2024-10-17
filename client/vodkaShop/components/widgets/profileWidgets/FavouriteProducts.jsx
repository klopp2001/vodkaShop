import { useContext, useEffect, useLayoutEffect } from "react"
import { FavouriteContext } from "../../../context/FavouriteContext"
import { Col, Row, Container } from "react-bootstrap"
import ProductCard from "../productWidgets/ProductCard"

export function FavouriteProducts() {
  const { favouriteProducts, loadFavouriteInfo } = useContext(FavouriteContext)
  //useLayoutEffect(() => loadFavouriteInfo(), [])
  const favouriteArray = new Array()
  if (favouriteProducts) {
    let rowItems = []
    const favouriteSize = favouriteProducts.length
    for (let i = 0; i < favouriteSize; i++) {
      rowItems.push(
        <Col>
          <ProductCard product={favouriteProducts[i]}></ProductCard>
        </Col>
      )
      if ((i + 1) % 4 == 0) {
        console.log(i % 4)
        favouriteArray.push(<Row>{rowItems}</Row>)
        rowItems = []
      }
    }
    if (rowItems.length != 0) {
      favouriteArray.push(<Row>{rowItems}</Row>)
    }
  }

  return (
    <>
      <Container>{favouriteArray}</Container>
    </>
  )
}
