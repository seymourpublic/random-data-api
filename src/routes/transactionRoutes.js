const express = require("express");
const { getRandomTransaction } = require("../controllers/transactionController");
const router = express.Router();

router.get("/random", getRandomTransaction);

module.exports = router;