const User = require("../models/User");
const { faker } = require("@faker-js/faker");
const mongoose = require("../dbInitialSetup");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  //await mongoose.connection.dropCollection("users");

  const passwordHash = await bcrypt.hash("1234", 10);

  const users = [];
  for (let i = 1; i <= 20; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: faker.datatype.number({ min: 18, max: 60 }),
      username: faker.internet.userName(),
      password: passwordHash.toString(),
      email: faker.internet.email(),
      direction: faker.lorem.words(15),
      telefone: faker.phone.imei(),
      role: faker.datatype.number({ min: 1, max: 3 }),
      order: [],
      purchases: [],
      rating: [],
    });
  }
  await User.insertMany(users);
  console.log("Seeder de Usuarios completado");
};
