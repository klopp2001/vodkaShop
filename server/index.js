const express = require("express")
const cors = require("cors")
const app = express()

const port = process.env.PORT || 5000

app.listen(port, (req,res) => {
  console.log(`server is running on d port ${port}`)
})
app.use(express.json())
app.use(cors())