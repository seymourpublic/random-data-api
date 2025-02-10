const { generateRandomUser } = require("../utils/dataGenerator");

const getRandomUser = (req, res) => {
    res.json(generateRandomUser());
};

module.exports = { getRandomUser };