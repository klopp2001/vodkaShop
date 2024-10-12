import { useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { Button, Stack } from "react-bootstrap"

export default function Profile() {
  const { user, logoutUser } = useContext(AuthContext)
  //const {user} = localStorage.getItem("User")
  return (
    <>
      <div>logged as {`${user?.name}`}</div>
      <Button
        onClick={() => {
          logoutUser()
        }}
      >
        Logout
      </Button>
      <Stack direction="horizontal">
        <a href="/profile/favourite" className="profile__button">
          Любимое
        </a>
        <a href="/profile/history" className="profile__button">
          История заказов
        </a>
      </Stack>
    </>
  )
}
