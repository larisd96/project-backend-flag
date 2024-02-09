const express = require("express")
const shopList = require("../controllers/shop-list/shop-list.controller")

const router = express.Router()

router.get("", shopList.getAllItems)
module.exports = router 
