import { useContext } from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"

export default function CartItemChanger({ product }) {
  const buttonStyle = {
    width: "45px",
    height: "35px",
    padding: "5px",
  }
  const {
    addedProducts,
    decreaseProductFromCart,
    addProductToCart,
    sendCartToServer,
  } = useContext(CartContext)

  return (
    <ButtonGroup style={{ maxWidth: "100px" }} size="sm">
      {addedProducts[`${product.name}`].count != 1 ? (
        <Button
          onClick={() => {
            decreaseProductFromCart(product)
            sendCartToServer(product.id, false)
          }}
          style={buttonStyle}
        >
          -
        </Button>
      ) : (
        <Button disabled style={buttonStyle}>
          -
        </Button>
      )}
      <Button style={buttonStyle} disabled>
        {addedProducts[`${product.name}`].count}
      </Button>
      <Button
        onClick={() => {
          addProductToCart(product)
          sendCartToServer(product.id)
        }}
        style={buttonStyle}
      >
        +
      </Button>
    </ButtonGroup>
  )
}
