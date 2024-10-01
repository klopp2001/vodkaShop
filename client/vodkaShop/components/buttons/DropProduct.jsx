import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"

export default function DropProduct({ product }) {
  const { dropProduct } = useContext(CartContext)

  const buttonStyle = {
    width: "35px",
    height: "35px",
    padding: "2px",
    
  }

  return (
    <Button
      variant="danger"
      onClick={() => {
        dropProduct(product)
      }}
      style={buttonStyle}
    >
      <img
        src="../../src/assets/drop.svg"
        style={{ height: "90%", width: "90%", marginBottom: "7px" }}
      ></img>
    </Button>
  )
}
