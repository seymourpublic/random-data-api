const { faker } = require("@faker-js/faker");

const generateRandomUser = () => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    avatar: faker.image.avatar(),
});

const generateRandomTransaction = () => ({
    id: faker.string.uuid(),
    amount: faker.finance.amount(),
    date: faker.date.past().toISOString(),
    category: faker.commerce.department(),
});

const generateCustomData = (type, count = 1) => {
    let data = [];
    
    for (let i = 0; i < count; i++) {
        switch (type) {
            case "name":
                data.push(faker.person.fullName());
                break;
            case "email":
                data.push(faker.internet.email());
                break;
            case "address":
                data.push(faker.location.streetAddress());
                break;
            case "number":
                data.push(faker.number.int());
                break;
            case "company":
                data.push(faker.company.name());
                break;
            case "job":
                data.push(faker.person.jobTitle());
                break;
            case "product":
                data.push(faker.commerce.productName());
                break;
            case "uuid":
                data.push(faker.string.uuid());
                break;
            case "lorem":
                data.push(faker.lorem.paragraph());
                break;
            default:
                data.push("Invalid type specified");
        }
    }

    return data;
};

module.exports = { generateRandomUser, generateRandomTransaction, generateCustomData };