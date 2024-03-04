const express = require("express")
const shopList = require("../controllers/shop-list/shop-list.controller")
const shopListItems = require("../controllers/shop-list/shop-list-item.controller")
const { jwtValidation } = require("../jwt/jwt");

const router = express.Router();

router.get("", jwtValidation, shopList.getAllItems);
router.get("/:id",jwtValidation, shopList.getShopList);
router.post("", jwtValidation, shopList.createShopList);
router.post("/:id/items", jwtValidation, shopListItems.createShopListItem )
router.put("/:id", jwtValidation, shopList.updateShopList);
router.delete("/:id", jwtValidation, shopList.deleteShopList);
router.delete("/:id/items", jwtValidation, shopListItems.deleteShopListItem )

module.exports = router;
