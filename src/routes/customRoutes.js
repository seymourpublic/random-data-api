const express = require("express");
const { getCustomData } = require("../controllers/customController");
const router = express.Router();

router.get("/random", getCustomData);

module.exports = router;