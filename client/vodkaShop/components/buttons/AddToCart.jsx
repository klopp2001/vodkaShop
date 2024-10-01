import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button, ButtonGroup } from "react-bootstrap"

export default function AddToCart({ product }) {
  const {
    addedProducts,
    decreaseProductFromCart,
    addProductToCart,
    sendCartToServer,
  } = useContext(CartContext)

  const buttonStyle = {
    width: "55px",
    height: "45px",
    padding: "5px",
  }
   if (addedProducts != undefined) {
     console.log(addedProducts)
   }
  return (
    <>
      {addedProducts &&
      addedProducts[`${product.name}`] &&
      addedProducts[`${product.name}`].count > 0 ? (
        <ButtonGroup size="sm" >
          {addedProducts[`${product.name}`].count === 1 ? (
            <Button
              variant="danger"
              onClick={() => {
                decreaseProductFromCart(product)
                sendCartToServer(product.id, false)
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
              variant="danger"
              onClick={() => {
                decreaseProductFromCart(product)
                sendCartToServer(product.id, false)
              }}
              style={buttonStyle}
            >
              -
            </Button>
          )}
          <Button variant="danger" disabled>
            {addedProducts[`${product.name}`].count}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              addProductToCart(product)
              sendCartToServer(product.id)
            }}
            style={buttonStyle}
          >
            +
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          variant="danger"
          onClick={() => {
            addProductToCart(product)
            sendCartToServer(product.id)
          }}
          style={{ padding: "0px 5px", width: "100px" }}
        >
          Add
        </Button>
      )}
    </>
  )
}
