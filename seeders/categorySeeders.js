const Category = require("../models/Category");
const mongoose = require("../dbInitialSetup");

async function categorySeeders() {
  await Category.collection.drop();

  const categories = [];
  const wood = new Category({
    name: "wood",
  });

  categories.push(wood);
  const pellets = new Category({
    name: "pellet",
  });

  categories.push(pellets);
  const accesories = new Category({
    name: "accessories",
  });

  categories.push(accesories);
  console.log("Category Seeder complete");
  return await Category.insertMany(categories);
}

module.exports = categorySeeders;
