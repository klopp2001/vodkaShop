const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
const sequelize = require("./database")
const userModel = require("./model/userModel")




const router = express.Router()

router.use((req,res,next)=>{
  console.log("zig hail")
  next()
})

const port = process.env.PORT || 8080
 
async function connectToDB(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


app.listen(port, (req,res) => {
  console.log(`server is running on port ${port}`)
  connectToDB()
})

app.get("/", async (req, res) =>{
  try{
    const t = await userModel.findOne({where: {id: 1}})
    res.send(`Hello ${t.name}`)  
  }
  catch {
    res.send('error')
  }
})




app.use(express.json())
app.use(cors())