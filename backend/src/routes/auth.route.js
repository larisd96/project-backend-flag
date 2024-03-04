const express = require("express");
const authController = require("../controllers/auth/auth.controller");

const router = express.Router();

router.post("", authController.authentication);
router.post("/register", authController.registration);
router.get("/logout", authController.logout);

module.exports = router;
