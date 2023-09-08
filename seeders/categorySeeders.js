const Product = require("../models/Product");
const mongoose = require("../dbInitialSetup");

module.exports = async () => {
  //await mongoose.connection.dropCollection("users");

  const products = [];
  for (let i = 1; i <= 20; i++) {
    products.push({
      name: faker.name.Name(),
      description: faker.lorem.paragraph(),
      image: faker.internet.avatar(),
    });
  }
  await Product.insertMany(products);
  console.log("Seeder de Usuarios completado");
};
