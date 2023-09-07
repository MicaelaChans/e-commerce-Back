const Product = require("../models/Product");
const { faker } = require("@faker-js/faker");
const mongoose = require("../dbInitialSetup");

module.exports = async () => {
  //await mongoose.connection.dropCollection("users");

  const products = [];
  for (let i = 1; i <= 20; i++) {
    users.push({
      firstname: faker.name.firstName(),
      description: faker.lorem.paragraph(),
      alchoolVol: faker,
      image: faker.internet.avatar(),
      type: faker,
      size: faker.datatype.number({}),
      stock: faker,
      price: faker,
      rating: faker,
      sales: faker,
    });
  }
  await Product.insertMany(products);
  console.log("Seeder de Usuarios completado");
};
