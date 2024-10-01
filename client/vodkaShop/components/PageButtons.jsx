import { useContext } from "react"
import { Button, Stack } from "react-bootstrap"
import { ShopContext } from "../context/ShopContext"


export default function PageButtons({btnSize}){
  const {currentPage, setCurrentPage} = useContext(ShopContext)
  let buttons = new Array()
  for (let i = 0; i < btnSize; i++){
    if (i == currentPage){
      buttons.push(
        <Button
          size="sm"
          disabled={true}
          variant="secondary"
          onClick={() => {
            setCurrentPage(i)
          }}
        >
          {i + 1}
        </Button>
      )
    }
    else {
      buttons.push(<Button size="sm" variant="secondary"onClick={()=>{
        setCurrentPage(i)
      }}>{i+1}</Button>)
    }
  }
  return(
    <Stack style ={{margin:"20px 0"}}className="justify-content-md-center" direction="horizontal" gap= {2} >
      {buttons}
    </Stack>
  )
}