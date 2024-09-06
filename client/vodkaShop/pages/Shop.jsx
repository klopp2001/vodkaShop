import Filters from "../components/Filters"
import {Container, Row, Col} from "react-bootstrap"
import GoodsDisplay from "../components/GoodsDisplay"
import PageButtons from "../components/PageButtons"
import { ShopContextProvider } from "../context/ShopContext"
export default function Shop({category}){
  return (
    <ShopContextProvider>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs = {2} style ={{padding: 0}}>
            <Filters/> 
          </Col>
          <Col style ={{backgroundColor:"white",}}>

              <GoodsDisplay category={category}></GoodsDisplay>  
              <PageButtons   btnSize = {5}></PageButtons>
          </Col>
         
        </Row>
      </Container>
    </ShopContextProvider>
  )
}