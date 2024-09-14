import { useContext } from "react"
import { Button, Form, Stack, Alert } from "react-bootstrap"
import { AuthContext } from "../context/AuthContext"

export default function Login() {
  const inputStyle = {
    width: "80%",
    alignSelf: "center",
  }
  const {
    loginUser,
    loginInfo,
    updateLoginInfo,
    loginError,
    loginErrorMessage,
  } = useContext(AuthContext)
  return (
    <>
      <Form onSubmit={loginUser} style={{ marginTop: "25px" }}>
        <Stack
          style={{ backgroundColor: "rgb(220, 220, 220)" }}
          className="col-md-5 mx-auto"
          gap={4}
        >
          <Form.Control
            style={{ width: "80%", alignSelf: "center", marginTop: "15px" }}
            placeholder={"Login"}
            onChange={(e) => {
              updateLoginInfo({ ...loginInfo, name: e.target.value })
            }}
          ></Form.Control>

          <Form.Control
            style={inputStyle}
            placeholder={"Password"}
            onChange={(e) => {
              updateLoginInfo({ ...loginInfo, password: e.target.value })
            }}
          ></Form.Control>

          <Button variant="secondary" type="submit" style={inputStyle}>
            Войти
          </Button>
          <div style={{ width: "80%", alignSelf: "center" }}>
            <div style={{ fontSize: "17px" }}>Вы не зарегистрированы?</div>
            <Button
              href="/register"
              variant="dark"
              style={{
                width: "100%",
                alignSelf: "center",
                marginBottom: "15px",
              }}
            >
              Зарегистрироваться
            </Button>
          </div>
          {loginError && (
            <Alert>
              <p>{loginErrorMessage}</p>
            </Alert>
          )}
        </Stack>
      </Form>
    </>
  )
}
