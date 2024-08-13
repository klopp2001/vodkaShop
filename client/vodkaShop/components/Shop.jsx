import Filters from "./Filters"
import {Container, Row, Col} from "react-bootstrap"
import GoodsDisplay from "./GoodsDisplay"
import PageButtons from "./PageButtons"
export default function Shop(){
  return (
    <Container fluid style={{marginTop: "30px"}}>
      <Row className="justify-content-md-center">
        <Col xs = {2} style ={{padding: 0}}>
          <Filters/> 
        </Col>
        <Col style ={{backgroundColor:"white"}}>
          <GoodsDisplay></GoodsDisplay>
        </Col>
        <PageButtons btnSize = {5}></PageButtons>
      </Row>
    </Container>
  )
}