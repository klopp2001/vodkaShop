import Accordion from 'react-bootstrap/Accordion';
export default function Filters(){
  return (
    <Accordion style={{width:"200px", }} alwaysOpen>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>First filter</Accordion.Header>
        <Accordion.Body>First filter body</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Second filter</Accordion.Header>
        <Accordion.Body>Second filter body</Accordion.Body>
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