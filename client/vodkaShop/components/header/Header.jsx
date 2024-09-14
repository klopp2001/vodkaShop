import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Contacts from "./Contacts"
import Logo from "./Logo"
import Search from "./Search"
import { Stack } from "react-bootstrap"
import CartButton from "./CartButton"

export default function Header() {
  return (
    <Stack style={{ marginBottom: "30px" }}>
      <Contacts></Contacts>
      <Stack
        style={{  margin: "0px" }}
        direction="horizontal"
        gap={2}
      >
        <Logo />
        <Search />
        <CartButton />
      </Stack>
    </Stack>
  )
}
