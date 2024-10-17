import { useCallback, useState } from "react"
import { Stack } from "react-bootstrap"
import { AdressSvg, HistorySvg, ProfileSvg, SettingsSvg } from "../../svg/svgs"

function SideBarButton({ children, text, id, activePage, callback }) {
  let activeStyle = ""
  if (id == activePage.name) {
    activeStyle = "sidebar__active"
  }
  return (
    <Stack
      onClick={() => {
        callback(id)
      }}
      className="profile__sidebar"
      id={activeStyle}
      direction="horizontal"
    >
      {children}
      <span style={{ marginLeft: "6px" }}>{text}</span>
    </Stack>
  )
}

export default function SideBar({ activePage, dispatch }) {
  return (
    <Stack style={{  minWidth:"300px" }} gap={3}>
      <SideBarButton
        id="display"
        activePage={activePage}
        callback={() => dispatch({ type: "display" })}
        text="My details"
      >
        <ProfileSvg />
      </SideBarButton>
      <SideBarButton
        id="addresses"
        activePage={activePage}
        callback={() => dispatch({ type: "addresses" })}
        text="My addresses"
      >
        <AdressSvg />
      </SideBarButton>
      <SideBarButton
        id="history"
        activePage={activePage}
        callback={() => dispatch({ type: "history" })}
        text="My order history"
      >
        <HistorySvg />
      </SideBarButton>
    </Stack>
  )
}
