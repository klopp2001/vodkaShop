const express = require("express")
const {
  getUserFavourite,
  addToFavourite,
  deleteFromFavourite,
} = require("../controler/favouriteController")

const favouriteRouter = express.Router()

favouriteRouter.get("/:id", getUserFavourite)
favouriteRouter.post("/add", addToFavourite)
favouriteRouter.post("/delete", deleteFromFavourite)
module.exports = favouriteRouter
