const Category = require("../models/Category");
const mongoose = require("../dbInitialSetup");


async function categorySeeders()  {
await mongoose.connection.dropCollection("category");

const categories = [];
  const wood = new Category({
    name: "Wood",
    image:
      "https://images-ext-2.discordapp.net/external/-kNpBtygpT-6M7wa4xy-hZLPtwWrXB5JT4PHHKBA3hU/%3Furl%3Dhttps%253A%252F%252Fel-pais-uruguay-production-web.s3.amazonaws.com%252Fbrightspot%252Fuploads%252F2019%252F07%252F12%252F5d28957b4b184.jpeg/https/imgs.elpais.com.uy/dims4/default/888d428/2147483647/strip/true/crop/931x640%2B15%2B0/resize/2880x1980%21/quality/90/?width=983&height=676",
  });
  
  categories.push(wood);
  const pellets = new Category({
    name: "Pellet",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149772739884888175/122746_cuanto-dura-estufa-pellets.png",
  })
 
  categories.push(pellets);
  const accesories = new Category({
    name: "Accessories",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149778969172910221/Captura_de_pantalla_2023-09-08_154640.png",
  })
  
  categories.push(accesories);
  console.log("Category Seeder complete");
  return await Category.insertMany(categories);
 
};

module.exports = categorySeeders;
