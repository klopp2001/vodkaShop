import { Button, Form, Stack } from "react-bootstrap"
function NoAddresses() {
  return (
    <Stack style={{ marginTop: "20px" }} gap={4}>
      <div>No addresses is added. Would you like to add one?</div>
      <Button style={{ width: "150px" }}>Add Address</Button>
    </Stack>
  )
}

export default function Addresses({ addresses }) {
  let array
  if (addresses) {
    array = addresses.map((address) => (
      <Form.Check
        style={{
          paddingLeft: "50px",
          backgroundColor: "rgb(244, 244, 245)",
          fontSize: "25px",
          marginTop:"10px"
        }}
        type="radio"
        key={address.name}
        label={address.name}
        name="group"
      />
    ))
  }

  return (
    <Stack >
      <h1 style={{ padding: "0", margin: "0" }}>Addresses</h1>
      {addresses ? <Form>{array}</Form> : <NoAddresses />}
    </Stack>
  )
}
