const express = require("express")
const shopList = require("../controllers/shop-list/shop-list.controller")
const { jwtValidation } = require("../jwt/jwt");

const router = express.Router();

router.get("", jwtValidation, shopList.getAllItems);
router.get("/:id",jwtValidation, shopList.getShopList);
router.post("", jwtValidation, shopList.createShopList);
router.put("/:id", jwtValidation, shopList.updateShopList);
router.delete("/:id", jwtValidation, shopList.deleteShopList);

module.exports = router;
