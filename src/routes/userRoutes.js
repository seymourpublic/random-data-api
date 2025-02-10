const express = require("express");
const { getRandomUser } = require("../controllers/userController");
const router = express.Router();

router.get("/random", getRandomUser);

module.exports = router;