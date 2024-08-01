const express = require("express")
const cors = require("cors")
const app = express()

const port = process.env.PORT || 8080

app.listen(port, (req,res) => {
  console.log(`server is running on d port ${port}`)
})
app.use(express.json())
app.use(cors())
app.get("/", (req, res) =>{
  res.send("Hello")
})
console.log('Гойда')