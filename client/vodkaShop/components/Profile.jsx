import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Button } from "react-bootstrap"

export default function Profile(){
  const {user, logoutUser} = useContext(AuthContext)
  //const {user} = localStorage.getItem("User")
  return (
    <>
      <div>
        logged as {`${user?.name}`}
      </div>
      <Button onClick={()=>{logoutUser()}}>Logout</Button>
    </>
    
  )
}