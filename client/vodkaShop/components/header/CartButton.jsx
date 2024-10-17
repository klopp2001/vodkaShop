import { ButtonGroup, Button } from "react-bootstrap"
import { CartSvg, HeartSvg, ProfileSvg } from "../svg/svgs"

export default function UserActions() {
  const buttonStyle = {
    width: "45px",
    height: "45px",
  }
  return (
    // <div style={{width: "267px", height:"50px", backgroundColor:"white", borderRadius:"25px", textAlign:"center"}}>
    //   Cart
    // </div>

    <ButtonGroup>
      <Button href="/cart" variant="dark" style={buttonStyle}>
        <CartSvg />
      </Button>
      <Button href="/profile/favourite" variant="dark" style={buttonStyle}>
        <HeartSvg />
      </Button>
      <Button href="/profile" variant="dark" style={buttonStyle}>
        <ProfileSvg />
      </Button>
    </ButtonGroup>
  )
}
