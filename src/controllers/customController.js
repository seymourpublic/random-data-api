const { generateCustomData } = require("../utils/dataGenerator");

const getCustomData = (req, res) => {
    const { type, count = 1 } = req.query;
    res.json({ type, data: generateCustomData(type, count) });
};

module.exports = { getCustomData };