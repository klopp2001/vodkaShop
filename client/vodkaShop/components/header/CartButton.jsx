import { ButtonGroup, Button} from "react-bootstrap"

export default function CartButton(){
  const buttonStyle = {
    width:"45px",
    height:"45px",
    padding: "5px",
  }
  return (
    // <div style={{width: "267px", height:"50px", backgroundColor:"white", borderRadius:"25px", textAlign:"center"}}>
    //   Cart
    // </div>
    
    <ButtonGroup>

      <Button href="/cart" variant = "secondary" style={buttonStyle} >
        <img src="../../src/assets/cart.svg" style={{height:"100%", width:"100%", objectFit: "fill",}}/>
      </Button>

      <Button href="/profile" variant="secondary" style={buttonStyle}>
        <img src="../../src/assets/profile.svg" style={{height:"100%", width:"100%", objectFit: "fill",}}/>
      </Button>
    </ButtonGroup>

  )
}