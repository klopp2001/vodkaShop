import { Carousel, Stack } from "react-bootstrap"

export default function EntryPage() {
  return (
    <>
      <Stack
        style={{ marginTop: "20px",  borderRadius: "20px" }}
      >
        <Carousel interval={3000} style={{ margin: "0px 50px" }}>
          <Carousel.Item style={{ height: 500 }}>
            <Stack direction="horizontal" style={{ height: "100%" }} gap={3}>
              <div
                style={{ height: "80%", width: "59%", background: "red" }}
              ></div>
              <div
                style={{ height: "80%", width: "59%", background: "red" }}
              ></div>
            </Stack>
          </Carousel.Item>
          <Carousel.Item style={{ height: 500 }}>
            <Stack direction="horizontal" style={{ height: "100%" }} gap={3}>
              <div
                style={{ height: "80%", width: "59%", background: "purple" }}
              ></div>
              <div
                style={{ height: "80%", width: "59%", background: "green" }}
              ></div>
            </Stack>
          </Carousel.Item>
        </Carousel>
      </Stack>
    </>
  )
}
