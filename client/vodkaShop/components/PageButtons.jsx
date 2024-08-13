import { Button, Stack } from "react-bootstrap"

export default function PageButtons({btnSize}){
  let buttons = new Array()
  for (let i = 1; i <= btnSize; i++){
    buttons.push(<Button>{i}</Button>)
  }
  return(
    <Stack>
      {buttons}
    </Stack>
  )
}