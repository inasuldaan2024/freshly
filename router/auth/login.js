const express = require("express");
const {
  loginPageController,
  loginController,
} = require("../../controller/auth/login");

const router = express.Router();

router.get("/", loginPageController);
router.post("/", loginController);

module.exports = router;
