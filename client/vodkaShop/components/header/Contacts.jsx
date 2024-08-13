import {Button,  Container,Nav, Navbar, Stack} from "react-bootstrap"
import {Link} from "react-router-dom"
export default function Contacts(){
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mt-4 mb-4 p-2" style ={{height : "10px", borderRadius: "40px", }}>
      <Container className="justify-content-between" style={{fontSize: "0.7rem"}}>
        <Nav>
          <Nav.Link href='/work'>Работа</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/about'>О нас</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='/rent'>Аренда</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}