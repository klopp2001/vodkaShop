import { useContext, useLayoutEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import { ShopContext } from "../context/ShopContext";

export default function CartItem({image, productName, count}){

  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        style={{ width: "70%", marginLeft: "15px", marginRight: "15px" }}
      >
        <div
          style={{
            padding: "10px",
            backgroundColor: "rgb(178, 190, 181)",
            borderRadius: "20px",
          }}
        >
          <img
            src={`http://localhost:8080/static/images/${image}`}
            style={{ maxWidth: "150px", maxHeight: "50px" }}
          />
        </div>

        <Stack style={{ width: "100%" }} direction="horizontal">
          <Stack>
            <span>{productName}</span>
            <Button style={{ width: "5%" }}>del</Button>
          </Stack>

          <Stack>
            <span>{count}</span>
            <Button style={{ width: "5%" }}></Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}