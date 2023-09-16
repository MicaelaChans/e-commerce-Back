const Product = require("../models/Product");
const mongoose = require("../dbInitialSetup");
const categorySeeders = require("./categorySeeders");

async function productSeeder() {
  await Product.collection.drop();

  const categories = await categorySeeders();

  const products = [];
  const harmony = new Product({
    name: "Harmony",
    description:
      "Harmony classic series represents practical, functional stoves on a budget. For a high flame or a slow burn, a single lever allows you to control the stove performance.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149763244970475520/imagen.png",
    otherProperties: {
      height: "732mm",
      width: "735mm",
      depth: "516mm",
      nominalPower: "12",
      eficiency: "76%",
      consumption: "8hs",
    },
    stock: 10,
    price: 1200,
    category: categories[0],
  });
  products.push(harmony);
  categories[0].products.push(harmony.id);
  await categories[0].save();
  const stanford = new Product({
    name: "Harmony B43",
    description:
      "With their timeless design and ease of use, the Stanford stoves will bring you comfort and satisfaction for many years. Fully built in cast iron, the Stanford models feature a side door and temperature control thermostat.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149763852641255464/imagena.png?width=545&height=675",
    otherProperties: {
      height: "790mm",
      width: "735mm",
      depth: "516mm",
      nominalPower: "12",
      eficiency: "76%",
      consumption: "8hs",
    },
    stock: 10,
    price: 1400,
    category: categories[0],
  });
  products.push(stanford);
  categories[0].products.push(stanford.id);
  await categories[0].save();
  const c43 = new Product({
    name: "Harmony C43",
    description:
      "The C line incorporates our proprietary stoves Woodbox® Technology. It is entirely built ​​in cast iron, which gives it a timeless look. With clean glass and remote control, model C is configured as a complete and harmonious design.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149764160293441626/imagenaa.png?width=545&height=675",
    otherProperties: {
      height: "814mm",
      width: "760mm",
      depth: "462mm",
      nominalPower: "10.5",
      eficiency: "80%",
      consumption: "10hs",
    },
    stock: 10,
    price: 1600,
    category: categories[0],
  });
  products.push(c43);
  categories[0].products.push(c43.id);
  await categories[0].save();
  const s43 = new Product({
    name: "Harmony S43",
    description:
      "The S-series combines the timeless class of a Stanford with patented Woodbox® Technology  and an optional remote control.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149768450659602583/imagenaaaa.png",
    otherProperties: {
      height: "803mm",
      width: "736mm",
      depth: "477mm",
      nominalPower: "10.5",
      eficiency: "80%",
      consumption: "10hs",
    },
    stock: 10,
    price: 1700,
    category: categories[0],
  });
  products.push(s43);
  categories[0].products.push(s43.id);
  await categories[0].save();
  const h43 = new Product({
    name: "Harmony H43",
    description:
      "Featuring our advanced Woodbox® Combustion Technology, the H models bring together the rustic charm of a traditionally styled cast iron stove and the most advanced combustion technology, with an optional remote control.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149774910286204969/magen.png?width=545&height=675",
    otherProperties: {
      height: "768mm",
      width: "750mm",
      depth: "433mm",
      nominalPower: "10.5",
      eficiency: "80%",
      consumption: "10hs",
    },
    stock: 10,
    price: 1400,
    category: categories[0],
  });
  products.push(h43);
  categories[0].products.push(h43.id);
  await categories[0].save();
  const hp43 = new Product({
    name: "Harmony P43",
    description:
      "Flexibility is central to the TQ / TQH Concept. Each model is offered with a choice of four stands, all of which rotate 360 degrees. This allows you to enjoy the comfort and warmth of the fire from all angles of the room. There is also a simple rotational kit available, which allows your TQ stove to rotate atop any stand of your own creation. The TQH models feature a side door for a convenient wood loading. The TQ / TQH line features our exclusive Woodbox® combustion technology, for high performance and optimum comfort. An optional remote control is available for added convenience if desired.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149774910021972088/Nestor-Martin-TQH-43.png?width=545&height=675",
    otherProperties: {
      height: "803mm",
      width: "680mm",
      depth: "180mm",
      nominalPower: "12",
      eficiency: "77%",
      consumption: "10hs",
    },
    stock: 10,
    price: 2000,
    category: categories[0],
  });
  products.push(hp43);
  categories[0].products.push(hp43.id);
  await categories[0].save();
  const box1002 = new Product({
    name: "Box 1002 Wall",
    description:
      "The Nestor Martin fireplace inserts bring extraordinary warmth into your room. With their clean lines and contemporary feel, they are a distinguished piece of furniture that is harmoniously integrated into the heart of your home. In addition to the soft radiant heat, Nestor Martin inserts allow for channeling the heat to other areas in the house, by means of their integrated blowers and two hot air outlets. A safety system that automatically shuts down the ventilation upon opening the door prevents the fan from drawing in any ashes and spreading them into the room. The «IQH» range of fireplace inserts, with its vertical configuration, is a heating element that integrates harmoniously in the heart of your home.",
    image:
      "https://www.scan-stoves.com/sites/scan-importers/files/products/Scan%201005%20Box%20VE%20%20prod%201%20Item.png",
    otherProperties: {
      height: "848mm",
      width: "682mm",
      depth: "498mm",
      nominalPower: "12",
      eficiency: "77%",
      consumption: "10hs",
    },
    stock: 10,
    price: 2500,
    category: categories[0],
  });
  products.push(box1002);
  categories[0].products.push(box1002.id);
  await categories[0].save();
  const box1003 = new Product({
    name: "Box 1003 Wall",
    description:
      "Create your wood stove from a variety of combinations: version with pyres of different sizes or without pyres, with or without bases! Personalize your Scan 1003 by adjusting the modules according to your interior, your desires and your needs. This designer wood stove combines aesthetics and practicality. The pyres initially intended for the storage of your logs were also thought of as decorative elements. Frame, books, objects will be welcome.",
    image:
      "https://www.scan-stoves.com/sites/scan-importers/files/products/Scan%201003%20Box%20CS%20prod%202%20Item.png",
    stock: 10,
    price: 950,
    otherProperties: {
      height: "572mm",
      width: "649mm",
      depth: "479mm",
      nominalPower: "11.5",
      eficiency: "96%",
      consumption: "12hs",
    },
    category: categories[0],
  });
  products.push(box1003);
  categories[0].products.push(box1003.id);
  await categories[0].save();
  const box1004 = new Product({
    name: "Box 1004 Wall",
    description:
      "Create your wood stove from a variety of combinations: version with pyres of different sizes or without pyres, with or without bases! Personalize your Scan 1003 by adjusting the modules according to your interior, your desires and your needs. This designer wood stove combines aesthetics and practicality. The pyres initially intended for the storage of your logs were also thought of as decorative elements. Frame, books, objects will be welcome.",
    image:
      "https://www.scan-stoves.com/sites/scan-importers/files/products/Scan%201003%20Box%20wall%20prod%201%20Item.png",
    stock: 10,
    price: 750,
    otherProperties: {
      height: "432mm",
      width: "549mm",
      depth: "379mm",
      nominalPower: "11",
      eficiency: "90%",
      consumption: "9hs",
    },
    category: categories[0],
  });
  products.push(box1004);
  categories[0].products.push(box1004.id);
  await categories[0].save();
  const decoA1 = new Product({
    name: "Deco A1",
    description:
      "Classic-style pellet stove, with cladding and firebox entirely made of cast iron in Black. Sealed structure and intelligent combustion management with Maestro+ technology.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149775878075715615/Nestaaaaain-TQH-43.png?width=545&height=675",
    stock: 10,
    price: 1200,
    otherProperties: {
      height: "768mm",
      width: "750mm",
      depth: "433mm",
      nominalPower: "10.5",
      eficiency: "93%",
      consumption: "10hs",
    },
    category: categories[1],
  });
  products.push(decoA1);
  categories[1].products.push(decoA1.id);
  await categories[1].save();
  const decoB2 = new Product({
    name: "Deco B2",
    description:
      "Loop is an oval shaped air stove, with a sealed structure and just over one metre high. The top and front are made of cast iron, whereas the sides are made of Black painted steel. Heat diffusion is optimal, thanks to the ventilation grilles on the top, the front and also on the side panels. The top slides on guide rails to load the pellet hopper more easily.",
    image:
      "https://cdn.discordapp.com/attachments/834507105087782992/1149785926407557262/Captura_de_pantalla_2023-09-08_161723.png",
    stock: 10,
    price: 1800,
    otherProperties: {
      height: "768mm",
      width: "750mm",
      depth: "433mm",
      nominalPower: "8",
      eficiency: "90.4%",
      consumption: "35hs",
    },
    category: categories[1],
  });
  products.push(decoB2);
  categories[1].products.push(decoB2.id);
  await categories[1].save();
  const decoH15 = new Product({
    name: "Deco H15",
    description:
      "Forced ventilation pellet stoves, made in black steel with a coloured front panel (Aluminium, Silver, Dark, Bordeaux). Brand new firebox, which is deeper and higher and follows the natural movement of the flame. Particularly suitable for corner installation",
    image:
      "https://cdn.discordapp.com/attachments/834507105087782992/1149786239474602004/Captura_de_pantalla_2023-09-08_161909.png",
    stock: 10,
    price: 1900,
    otherProperties: {
      height: "768mm",
      width: "750mm",
      depth: "433mm",
      nominalPower: "8.1",
      eficiency: "90.9%",
      consumption: "23hs",
    },
    category: categories[1],
  });
  products.push(decoH15);
  categories[1].products.push(decoH15.id);
  await categories[1].save();
  const alea1012 = new Product({
    name: "Alea 1012",
    description:
      'ECONOMICAL, AIRTIGHT SLIM PELLET STOVE WITH A DEPTH OF 28 CM Slim format pellet stove, which is part of MCZ new "Easy" line, a full range of pellet stoves offering basic finishes and electronics at a fair price. Alea is a ventilated sealed stove with a reduced depth (less than 28 cm), ideal for corridors and confined spaces. It is made with cast iron door, White, Silver, Black or Bordeaux steel cladding. Cast iron brazier and firebox back panel.',
    image:
      "https://cdn.discordapp.com/attachments/834507105087782992/1149793470521802833/Captura_de_pantalla_2023-09-08_164756.png",
    stock: 10,
    price: 2100,
    otherProperties: {
      height: "768mm",
      width: "750mm",
      depth: "433mm",
      nominalPower: "14.1",
      eficiency: "90%",
      consumption: "24hs",
    },
    category: categories[1],
  });
  products.push(alea1012);
  categories[1].products.push(alea1012.id);
  await categories[1].save();
  const alea1014 = new Product({
    name: "Alea 1014",
    description:
      "STEEL PELLET STOVE, AVAILABLE IN 8 VERSIONS (AIR, DUCTED, HYDRO AND WITH CORE TECHNOLOGY) Pellet stove made with a steel structure, cast iron top and painted steel sides color White, Dark, Silver, Bordeaux. New 2021 restyling, which enhances the aesthetic performance of the flame. Thanks to the Maestro+ technology, the stove can be controlled directly from a smartphone, via a specific App, which provides full control either at home or away, by connecting via the home internet network (router) or directly via Bluetooth. An innovative retractable digital control panel fitted on the top is also available as standard",
    image:
      "https://cdn.discordapp.com/attachments/834507105087782992/1149794175982764032/Captura_de_pantalla_2023-09-08_165048.png",
    stock: 10,
    price: 2100,
    otherProperties: {
      height: "768mm",
      width: "750mm",
      depth: "433mm",
      nominalPower: "11.9",
      eficiency: "91.1%",
      consumption: "29hs",
    },
    category: categories[1],
  });
  products.push(alea1014);
  categories[1].products.push(alea1014.id);
  await categories[1].save();
  const aduroP1 = new Product({
    name: "Aduro P1",
    description:
      "Aduro P1 is a classic round pellet stove in Scandinavian style. A large, stylish glass door leads your eyes right into the flames. The integrated WiFi module makes it easy and simple to control the stove, no matter where you are in the world. The stove can work on 5 levels of which level 1 is a silent level with no fan",
    image:
      " https://www.adurofire.com/typo3temp/assets/_processed_/8/f/csm_aduro-p1-round-pellet-stove-withmatt-surface_01_a7c9377bf6.png",
    stock: 10,
    price: 2500,
    otherProperties: {
      height: "1100mm",
      width: "533mm",
      depth: "545mm",
      nominalPower: "11.7",
      eficiency: "95.1%",
      consumption: "19hs",
    },
    category: categories[1],
  });
  products.push(aduroP1);
  categories[1].products.push(aduroP1.id);
  await categories[1].save();
  const aduroP13 = new Product({
    name: "Aduro P1.3",
    description:
      "Aduro P1.3 is a round pellet stove with a Scandinavian design. A large, elegant glass door and black glass sides give the stove an exclusive look. The integrated Wi-Fi module makes it easy to control the stove, no matter where you are in the world. The stove can be used on 5 different levels of which level 1 is a low noise level with no fan",
    image:
      " https://www.adurofire.com/typo3temp/assets/_processed_/4/9/csm_aduro-p1-3-round-pellet-stove-with-black-glass-sides_01_0545dab144.png",
    stock: 10,
    price: 2200,
    otherProperties: {
      height: "1100mm",
      width: "533mm",
      depth: "545mm",
      nominalPower: "10.7",
      eficiency: "92%",
      consumption: "17hs",
    },
    category: categories[1],
  });
  products.push(aduroP13);
  categories[1].products.push(aduroP13.id);
  await categories[1].save();
  const aduroP14 = new Product({
    name: "Aduro P1.4",
    description:
      "Aduro P1.4 is a round pellet stove in Scandinavian design. The stove has white glass sides that give the stove a harmonious look in contrast to the stove's black glass door. With the integrated Wi-Fi module, you can operate the stove no matter where you are. You can use the stove at 5 different levels of which level 1 is quiet and runs with no fan.",
    image:
      " https://www.adurofire.com/typo3temp/assets/_processed_/f/9/csm_aduro-p1-4-round-pellet-stove-with-white-glass-sides_01_80b032ab41.png",
    stock: 10,
    price: 2300,
    otherProperties: {
      height: "1100mm",
      width: "533mm",
      depth: "545mm",
      nominalPower: "12.7",
      eficiency: "94%",
      consumption: "19hs",
    },
    category: categories[1],
  });
  products.push(aduroP14);
  categories[1].products.push(aduroP14.id);
  await categories[1].save();
  const aduroP2 = new Product({
    name: "Aduro P2",
    description:
      "Simple and cubic design with a separate WiFi module that makes the stove user-friendly. Turn on the heat on your way home from work or a holiday so it is warm before you come home. In Aduro P2, the fan is replaced by natural convection, just like a regular wood burning stove, resulting in a more silent operation. Special for this stove is also the pellet-tank, which is easily filled up through a drawer on the side of the stove.",
    image:
      "  https://www.adurofire.com/typo3temp/assets/_processed_/8/1/csm_Modern-pellet-stove-with-side-glass_02_013a40b54f.png",
    stock: 10,
    price: 2600,
    otherProperties: {
      height: "1267mm",
      width: "493mm",
      depth: "445mm",     
      nominalPower: "13.7",
      eficiency: "96%",
      consumption: "21hs",
    },
    category: categories[1],
  });
  products.push(aduroP2);
  categories[1].products.push(aduroP2.id);
  await categories[1].save();
  const woodshet = new Product({
    name: "Woodshed",
    description: "Ideal tool for organizing the stolve´s wood",
    image:
      "https://cdn.discordapp.com/attachments/834507105087782992/1149794402315812925/Captura_de_pantalla_2023-09-08_154640.png",
    stock: 10,
    price: 350,
    otherProperties: {
      height: "768mm",
      width: "750mm",
      depth: "433mm",
    },
    category: categories[2],
  });
  products.push(woodshet);
  categories[2].products.push(woodshet.id);
  await categories[2].save();
  const pellets = new Product({
    name: "Pellets",
    description: "Pellets bag for stolve",
    image:
      "https://cdn.discordapp.com/attachments/834507105087782992/1149797730684780686/Captura_de_pantalla_2023-09-08_170324.png",
    stock: 10,
    price: 30,
    otherProperties: {
      weight: "15kg",
    },
    category: categories[2],
  });
  products.push(pellets);
  categories[2].products.push(pellets.id);
  await categories[2].save();
  const charcoal = new Product({
    name: "Charcoal",
    description:
      "Restaurant quality lumpwood charcoal, made form superior hardwoods to deliver high intensity heat.",
    image:
      "https://cdn.discordapp.com/attachments/852697946738130954/1151873466933465209/Captura_de_pantalla_2023-09-14_102023.png",
    stock: 10,
    price: 21,
    otherProperties: {
      weight: "10kg",
    },
    category: categories[2],
  });
  products.push(charcoal);
  categories[2].products.push(charcoal.id);
  await categories[2].save();
  const logs = new Product({
    name: "Kiln dried hardwood logs",
    description:
      "Hardwood logs sourced from sustainable British woodland, they are cut to +/- 25 cm and offer an average moisture content of 20% giving a clean burn with high heat production.",
    image:
      "https://cdn.discordapp.com/attachments/852697946738130954/1151873467600359495/Captura_de_pantalla_2023-09-14_101913.png",
    stock: 10,
    price: 10,
    otherProperties: {
      weight: "2kg",
    },
    category: categories[2],
  });
  products.push(logs);
  categories[2].products.push(logs.id);
  await categories[2].save();
  const toolsSet = new Product({
    name: "3-Piece wood stove accessory set",
    description: "Contains shovel, clamp and brush. Includes support",
    image:
      "https://cdn.discordapp.com/attachments/852697946738130954/1151873467340292186/productos34_1162.png",
    stock: 10,
    price: 21,
    otherProperties: {
      height: "720mm",
    },
    category: categories[2],
  });
  products.push(toolsSet);
  categories[2].products.push(toolsSet.id);
  await categories[2].save();
  console.log("Product Seeder complete");
  return await Product.insertMany(products);
}

module.exports = productSeeder;
