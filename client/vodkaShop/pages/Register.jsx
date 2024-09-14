import { useContext } from "react"
import {
  InputGroup,
  Form,
  Container,
  Stack,
  Col,
  Row,
  Button,
  Alert,
} from "react-bootstrap"

import { AuthContext } from "../context/AuthContext"

function RegisterForm({ placeholder, onChange, type, value }) {
  const formControlStyle = {
    width: "80%",
    height: "50px",
  }

  return (
    <Form.Control
      value={value}
      type={type}
      style={formControlStyle}
      placeholder={placeholder}
      onChange={onChange}
    ></Form.Control>
  )
}

export default function Register() {
  const {
    registerInfo,
    registerUser,
    updateRegisterInfo,
    registerError,
    registerErrorMessage,
  } = useContext(AuthContext)
  console.log(registerInfo)
  return (
    <>
      <Form onSubmit={registerUser}>
        <Stack className="align-items-center" gap={5}>
          <Stack style={{ marginTop: "50px" }} direction="horizontal">
            <Stack
              style={{ width: "200px", gap: "20px" }}
              className="align-items-center"
            >
              <RegisterForm
                type="name"
                value={registerInfo.name}
                placeholder="Name"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              ></RegisterForm>
              <RegisterForm
                type="email"
                value={registerInfo.email}
                placeholder="Email"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              ></RegisterForm>
              <RegisterForm
                type="password"
                value={registerInfo.password}
                placeholder="Password"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              ></RegisterForm>
            </Stack>
            <Stack
              style={{ width: "200px", gap: "20px" }}
              className="align-items-center"
            >
              <RegisterForm
                placeholder="Birth Date"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    birthDate: e.target.value,
                  })
                }
              ></RegisterForm>
              <RegisterForm
                placeholder="Phone Number"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    phoneNumber: e.target.value,
                  })
                }
              ></RegisterForm>
            </Stack>
          </Stack>
          <Button variant="primary" type="submit">
            Register
          </Button>
          {registerError && (
            <Alert>
              <p>{registerErrorMessage}</p>
            </Alert>
          )}
        </Stack>
      </Form>
    </>
  )
}
