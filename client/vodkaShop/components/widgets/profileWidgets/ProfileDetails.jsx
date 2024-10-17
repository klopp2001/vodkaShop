import { Button, Col, Form, Row, Stack } from "react-bootstrap"
const littleHeader = {
  fontWeight: "bold",
  fontSize: "20px",
}

function SaveButton() {
  return (
    <Button
      style={{
        padding: "20px 10px",
        fontSize: "16px",
        fontWeight: "bold",
        marginTop: "20px",
        width: "130px",
      }}
    >
      SAVE
    </Button>
  )
}

function PersonelInfo() {
  return (
    <Stack>
      <div style={littleHeader}>Personel Information</div>
      <hr></hr>
      <Stack
        direction="horizontal"
        className="justify-content-between align-items-start"
      >
        <p style={{ maxWidth: "30%", textAlign: "justify" }}>
          Assertively utilize adaptive customer service for future-proof
          platforms. Comletely drive optimal markets
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Form.Group className="form-row">
            <Row>
              <Col>
                <Form.Label id="profile__contrlos">FIRST NAME</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "rgb(244, 244, 245)" }}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label id="profile__contrlos">SECOND NAME</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "rgb(244, 244, 245)" }}
                ></Form.Control>
              </Col>
            </Row>
          </Form.Group>
          <Form.Label id="profile__contrlos">BIRTH DATE</Form.Label>
          <Form.Control
            type="date"
            style={{ maxWidth: "30%", backgroundColor: "rgb(244, 244, 245)" }}
          ></Form.Control>
          <div>
            <Form.Label id="profile__contrlos">PHONE NUMBER</Form.Label>
            <Form.Control
              style={{ backgroundColor: "rgb(244, 244, 245)", width: "47.5% " }}
            ></Form.Control>
            <div id="profile__down">
              Keep 9-digit format with no spaces and dashes
            </div>
          </div>

          <SaveButton />
        </div>
      </Stack>
    </Stack>
  )
}

function EMailAddress() {
  return (
    <Stack style={{ marginTop: "50px" }}>
      <div style={littleHeader}>E-mail address</div>
      <hr></hr>
      <Stack
        direction="horizontal"
        className="justify-content-between align-items-start"
      >
        <p style={{ maxWidth: "30%", textAlign: "justify" }}>
          Assertively utilize adaptive customer service for future-proof
          platforms. Comletely drive optimal markets
        </p>
        <div
          style={{
            marginRight: "27%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Form.Label id="profile__contrlos">E-MAIL ADDRESS</Form.Label>
          <Form.Control
            style={{ backgroundColor: "rgb(244, 244, 245)" }}
          ></Form.Control>
          <Form.Label id="profile__contrlos">PASSWORD</Form.Label>
          <Form.Control
            style={{ backgroundColor: "rgb(244, 244, 245)" }}
          ></Form.Control>
          <SaveButton />
        </div>
      </Stack>
    </Stack>
  )
}

function Password() {
  return (
    <Stack style={{ marginTop: "50px" }}>
      <div style={littleHeader}>New password</div>
      <hr></hr>
      <Stack
        direction="horizontal"
        className="justify-content-between align-items-start"
      >
        <p style={{ maxWidth: "30%", textAlign: "justify" }}>
          Assertively utilize adaptive customer service for future-proof
          platforms. Comletely drive optimal markets
        </p>
        <div
          style={{
            marginRight: "27%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Form.Label id="profile__contrlos">CURRENT PASSWORD</Form.Label>
          <Form.Control
            style={{ backgroundColor: "rgb(244, 244, 245)" }}
          ></Form.Control>
          <Form.Label id="profile__contrlos">PASSWORD</Form.Label>
          <Form.Control
            style={{ backgroundColor: "rgb(244, 244, 245)" }}
          ></Form.Control>
          <Form.Label id="profile__contrlos">NEW PASSWORD</Form.Label>
          <Form.Control
            style={{ backgroundColor: "rgb(244, 244, 245)" }}
          ></Form.Control>
          <SaveButton />
        </div>
      </Stack>
    </Stack>
  )
}

export default function ProfileDetails() {
  return (
    <Stack gap={4}>
      <h1>My details</h1>
      <PersonelInfo />
      <EMailAddress />
      <Password />
    </Stack>
  )
}
