import { InputGroup, Button, Form } from "react-bootstrap"

export default function Search() {
  return (
    <>
      <InputGroup size="sm">
        <Form.Control
          style={{
            borderRadius: "40px 0px 0px 40px",
            borderColor: "black",
            borderWidth: "1px",
            focus,
          }}
          variant="secondary"
          placeholder="Поиск"
        />

        <Button
          style={{
            borderColor: "black",
            marginLeft: "2px",
            borderRadius: "0px 40px 40px 0px",
            borderWidth: "1px",
          }}
          variant="secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup>
    </>
  )
}
