const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
const sequelize = require("./database")
const userModel = require("./model/userModel")
const testModel = require("./model/productModel")
const userRouter = require("./routes/userRoute")
const productRouter = require("./routes/productsRoute")
const cartRouter = require("./routes/cartRoute")

const router = express.Router()

router.use((req, res, next) => {
  console.log("zig hail")
  next()
})

const port = process.env.PORT || 8080

async function connectToDB() {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

app.get("/", async (req, res) => {
  try {
    const t = await testModel.findOne({ where: { testCol: "" } })
    res.send(`Hello ${t.name}`)
  } catch {
    res.send("error")
  }
})
app.use("/static/images/", express.static(`${__dirname}/images`))

app.use(express.json())
app.use(cors())
app.use("/user", userRouter)
app.use("/shop", productRouter)
app.use("/cart", cartRouter)
app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`)
  connectToDB()
})
