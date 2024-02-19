const express = require("express")
const shopList = require("../controllers/shop-list/shop-list.controller")

const router = express.Router();

router.get("", shopList.getAllItems);
router.post("", shopList.createShopList);
router.put("/:id", shopList.updateShopList);
router.delete("/:id", shopList.deleteShopList);
module.exports = router;
