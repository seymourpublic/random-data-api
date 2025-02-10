const { faker } = require("@faker-js/faker");

const getRandomTransaction = (req, res) => {
    const transaction = {
        id: faker.string.uuid(),
        amount: faker.finance.amount(),
        date: faker.date.past().toISOString(),
        category: faker.commerce.department(),
    };
    res.json(transaction);
};

module.exports = { getRandomTransaction };