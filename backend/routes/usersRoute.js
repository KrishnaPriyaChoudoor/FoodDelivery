const express = require("express");
const { setUser, loginUser } = require("../controllers/usercontroller");

const router = express.Router();
router.post("/user/register", setUser);
router.post("/user/login", loginUser);

module.exports = router;
