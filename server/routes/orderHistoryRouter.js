const express = require("express")
const {
  addOrderHistory,
  getOrderHistory,
} = require("../controler/orderHistoryController")

const orderHistoryRouter = express.Router()
orderHistoryRouter.post("/", addOrderHistory)
orderHistoryRouter.get("/:userId", getOrderHistory)

module.exports = orderHistoryRouter
