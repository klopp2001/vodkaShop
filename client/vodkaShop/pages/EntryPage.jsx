import { Button, Carousel, Stack } from "react-bootstrap"

function MainCarouselItem({
  image,
  backgroundImage = undefined,
  color = "white",
  floatDir = "right",
  buttonName,
  buttonHref,
}) {
  return (
    <div
      style={{
        borderRadius: "50px",
        background: `${color}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "right",
        height: "80%",
        width: "59%",
      }}
    >
      <img
        style={{
          borderRadius: "50px",
          height: "73%",
          marginLeft: "20%",
        }}
        src={`http://localhost:8080/static/images/${image}`}
      ></img>
      {buttonName && (
        <Button
          variant="light"
          style={{ marginLeft: "65%", marginRight: "10%", marginTop: "4%" }}
          href={buttonHref}
        >
          {buttonName}
        </Button>
      )}
    </div>
  )
}

export default function EntryPage() {
  return (
    <>
      <Stack style={{ marginTop: "20px", borderRadius: "20px" }}>
        <Carousel interval={null} style={{ margin: "0px 50px" }}>
          <Carousel.Item style={{ height: 500 }}>
            <Stack direction="horizontal" style={{ height: "100%" }} gap={3}>
              <MainCarouselItem
                color="black"
                image="afrikan_drink.png"
                buttonHref={"/shop/beer"}
                buttonName={"Buy beer"}
              ></MainCarouselItem>
              <MainCarouselItem
                color="black"
                image="efr.jpg"
                buttonHref={"/shop/vodka"}
                buttonName={"Buy vodka"}
              ></MainCarouselItem>
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
