import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
function b(){
  return(
    <Button></Button>
  )
}
export default function Filters(){
  let filter_style={
    fontSize: "0.9rem",
    paddingLeft: "15px"}
  return (
    <Accordion style={{width:"200px", }} alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Крепкий алкоголь</Accordion.Header>
        <Accordion.Body>
          <a href='/shop/vodka' className='a_link' style={filter_style}>Водка</a>
          
        </Accordion.Body>
        <Accordion.Body>
          <a href='/shop/whiskey' className='a_link' style={filter_style}>Виски</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
        Пиво
        </Accordion.Header>
        <Accordion.Body> <a href='/shop/beer' className='a_link'style={filter_style}>Пиво</a></Accordion.Body>
        <Accordion.Body>Пиво отечественное</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Third filter</Accordion.Header>
        <Accordion.Body>Third filter body</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Fourth filter</Accordion.Header>
        <Accordion.Body>Fourth filter body</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}