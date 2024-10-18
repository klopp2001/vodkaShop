import { useContext, useReducer, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { Breadcrumb, Button, Stack } from "react-bootstrap"
import SideBar from "../components/widgets/profileWidgets/SideBar"
import History from "../components/widgets/profileWidgets/History"
import ProfileDetails from "../components/widgets/profileWidgets/ProfileDetails"
import Addresses from "../components/widgets/profileWidgets/Addresses"

export default function Profile() {
  const { user, logoutUser } = useContext(AuthContext)
  const [isDetailsPage, setIsDetailsPage] = useState(false)
  const [isHistoryPage, setIsHistoryPage] = useState(false)
  const [isAdressesPage, setIsAdressesPage] = useState(false)
  const [isSettingsPage, setIsSettingsPage] = useState(false)

  function reducer(state, action) {
    switch (action.type) {
      case "display":
        return {
          name: "display",
        }
      case "addresses":
        return {
          name: "addresses",
        }
      case "history":
        return {
          name: "history",
        }
      case "settings":
        return {
          name: "settings",
        }
      default:
        return {
          page: "none",
        }
    }
  }

  const [activePage, dispatch] = useReducer(reducer, { name: "display" })
  const firstOrder = {
    id: "#42415",
    date: "01.01.20",
    products: [
      { name: "vodka", price: "400", image: "medved_0,5l.jpg" },
      { name: "vodka", price: "400", image: "Perepelka_0,2l.jpg" },
    ],
  }
  const secondOrder = {
    id: "#42415",
    date: "01.01.20",
    products: [{ name: "vodka", price: "400" }],
  }

  const orders = [firstOrder, secondOrder]
  return (
    <>
      <Breadcrumb id="breadnew">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>My Profile</Breadcrumb.Item>
      </Breadcrumb>
      <h1 style={{ margin: "0 25px 25px 0" }}>My Account</h1>
      <Stack
        style={{ paddingTop: "25px" }}
        direction="horizontal"
        className="align-items-start"
        gap={5}
      >
        <SideBar activePage={activePage} dispatch={dispatch}></SideBar>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            borderRadius: "20px",
            padding: "60px 140px",
          }}
        >
          {activePage.name == "display" && <ProfileDetails />}
          {activePage.name == "history" && <History/>}
          {activePage.name == "addresses" && (
            <Addresses
              addresses={[
                { name: "moskovskaya", isCurrent: false },
                { name: "donetskaya", isCurrent: false },
                { name: "luganskaya", isCurrent: false },
              ]}
            />
          )}
        </div>
      </Stack>
    </>

    // <>
    //   <div>logged as {`${user?.name}`}</div>
    //   <Button
    //     onClick={() => {
    //       logoutUser()
    //     }}
    //   >
    //     Logout
    //   </Button>
    //   <Stack direction="horizontal">
    //     <a href="/profile/favourite" className="profile__button">
    //       Любимое
    //     </a>
    //     <a href="/profile/history" className="profile__button">
    //       История заказов
    //     </a>
    //   </Stack>
  )
}
