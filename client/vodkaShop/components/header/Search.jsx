import { InputGroup, Button, Form } from "react-bootstrap"
Form.Control
export default function Search() {
  return (
    <>
      <div
        style={{
          borderColor: "grey",
          borderWidth: "px",
          borderLeft: "none",
          border: "solid",
          borderRadius: "100px",
          width: "100%",
          background: "white",
        }}
      >
        <InputGroup size="sm">
          <Button
            href="/shop"
            style={{
              borderWidth: "1px",
              borderRadius: "35px ",
              borderLeft: "none",
              marginLeft: "-1px",
              marginRight: "5px",
            }}
            variant="dark"
          >
            Каталог
          </Button>
          <Form.Control
            style={{
              borderColor: "grey",
              borderWidth: "1px",
              borderRadius: "100px",
              border: "none",
            }}
            variant="secondary"
            placeholder="Поиск"
          />

          <Button
            style={{
              marginLeft: "2px",
              marginRight: "-3px",
              borderRadius: "0px 40px 40px 0px",
            }}
            variant="dark"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </>
  )
}
