import {InputGroup, Button, Form} from "react-bootstrap"

export default function Search(){
  return(
    <>
      <InputGroup size="sm" >
        <Form.Control style = {{backgroundColor : "rgb(167, 176, 169)", borderColor:"black",focus}}variant="secondary" placeholder="Поиск"/>

        <Button variant="light" id="button-addon2" >
            Search
        </Button>

      </InputGroup>
    </>
  )
}