const express = require("express")
const shopList = require("../controllers/shop-list/shop-list.controller")
const shopListItems = require("../controllers/shop-list/shop-list-item.controller")
const router = express.Router();

router.get("", shopList.getAllItems);
router.get("/:id", shopList.getShopList);
router.post("", shopList.createShopList);
router.post("/:id/items", shopListItems.createShopListItem )
router.put("/:id", shopList.updateShopList);
router.delete("/:id", shopList.deleteShopList);
router.delete("/:id/items", shopListItems.deleteShopListItem )
module.exports = router;
