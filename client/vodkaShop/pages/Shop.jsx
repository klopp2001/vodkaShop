import Filters from "../components/widgets/catalogueWidgets/Filters"
import { Container, Row, Col, Stack } from "react-bootstrap"
import GoodsDisplay from "../components/widgets/catalogueWidgets/GoodsDisplay"
import PageButtons from "../components/buttons/PageButtons"
import { ShopContext, ShopContextProvider } from "../context/ShopContext"
import { useContext } from "react"

import Catalogue from "./Catalogue"
import FavouriteContextProvider from "../context/FavouriteContext"

export default function Shop({ category }) {
  const translator = (category) => {
    switch (category) {
      case "vodka":
        return "Водка"
      case "beer":
        return "Пиво"
    }
  }

  return (
    <Stack
      gap={5}
      className="justify-content-between align-items-start"
      direction="horizontal"
    >
      <Col xs={3} style={{ padding: 0 }}>
        <Filters />
      </Col>
      {category ? (
        <Col
          style={{
            backgroundColor: "rgb(255,255,255)",
            borderRadius: "30px",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              marginLeft: "20px",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            {translator(category)}
          </div>

          <GoodsDisplay category={category}></GoodsDisplay>
        </Col>
      ) : (
        <Catalogue></Catalogue>
      )}
    </Stack>
  )
}
