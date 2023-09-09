const Product = require("../models/Product");
const mongoose = require("../dbInitialSetup");
//const categorySeeders = require("./categorySeeders");

module.exports = async () => {
  await mongoose.connection.dropCollection("product");

  //const categories = await categorySeeders();

  const products = [];
  products.push({
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
    category: "Wood",
  });
  products.push({
    name: "Stanford",
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
    category: "Wood",
  });
  products.push({
    name: "C 43",
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
    category: "Wood",
  });
  products.push({
    name: "S 43",
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
    category: "Wood",
  });
  products.push({
    name: "H 43",
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
    category: "Wood",
  });
  products.push({
    name: "TQH 43",
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
    category: "Wood",
  });
  products.push({
    name: "IQH 43",
    description:
      "The Nestor Martin fireplace inserts bring extraordinary warmth into your room. With their clean lines and contemporary feel, they are a distinguished piece of furniture that is harmoniously integrated into the heart of your home. In addition to the soft radiant heat, Nestor Martin inserts allow for channeling the heat to other areas in the house, by means of their integrated blowers and two hot air outlets. A safety system that automatically shuts down the ventilation upon opening the door prevents the fan from drawing in any ashes and spreading them into the room. The «IQH» range of fireplace inserts, with its vertical configuration, is a heating element that integrates harmoniously in the heart of your home.",
    image:
      "https://media.discordapp.net/attachments/834507105087782992/1149765106650062888/Nestor-Martin-IQH-43-3-sided-250-mm-frame.png?width=545&height=675",
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
    category: "Wood",
  });

  products.push({
    name: "Decò",
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
    category: "Pellet",
  });
  products.push({
    name: "Loop",
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
    category: "Pellet",
  });
  products.push({
    name: "Halo",
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
    category: "Pellet",
  });
  products.push({
    name: "Alea",
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
    category: "Pellet",
  });
  products.push({
    name: "Ego",
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
    category: "Pellet",
  });

  products.push({
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
    category: "Accessories",
  });
  products.push({
    name: "Pellets",
    description: "Pellets bag for stolve",
    image:
      "https://cdn.discordapp.com/attachments/834507105087782992/1149797730684780686/Captura_de_pantalla_2023-09-08_170324.png",
    stock: 10,
    price: 30,
    otherProperties: {
      weight: "15kg",
    },
    category: "Accessories",
  });

  await Product.insertMany(products);
  console.log("Product Seeder complete");
};
