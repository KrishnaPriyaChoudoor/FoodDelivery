const express = require("express");
const { getDishes } = require("../controllers/dishescontroller");

const router = express.Router();
router.get("/dishes", getDishes);

module.exports = router;
