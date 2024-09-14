import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button, ButtonGroup } from "react-bootstrap"

export default function AddToCart({ productName }) {
  const {
    addedProducts,
    decreaseProductFromCart,
    addProductToCart,
    sendCartToServer,
  } = useContext(CartContext)
  const buttonStyle = {
    width: "45px",
    height: "45px",
    padding: "5px",
  }

  return (
    <>
      {addedProducts[`${productName}`] &&
      addedProducts[`${productName}`] > 0 ? (
        <ButtonGroup size="sm">
          {addedProducts[`${productName}`] == 1 ? (
            <Button
              onClick={() => {
                decreaseProductFromCart(productName)
                sendCartToServer(productName, false)
              }}
              style={buttonStyle}
            >
              <img
                src="../../src/assets/drop.svg"
                style={{ height: "50%", width: "50%" }}
              ></img>
            </Button>
          ) : (
            <Button
              onClick={() => {
                decreaseProductFromCart(productName)
                sendCartToServer(productName, false)
              }}
              style={buttonStyle}
            >
              -
            </Button>
          )}
          <Button disabled>{addedProducts[`${productName}`]}</Button>
          <Button
            onClick={() => {
              addProductToCart(productName)
              sendCartToServer(productName)
            }}
            style={buttonStyle}
          >
            +
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          onClick={() => {
            addProductToCart(productName)
            sendCartToServer(productName)
          }}
          style={{ margin: "2px", padding: "0px 5px", width: "100px" }}
          className="border-0"
          variant="danger"
        >
          Add
        </Button>
      )}
    </>
  )
}
