require("dotenv").config();
const path = require("path");
require("./dbInitialSetup");
const express = require("express");
const productSeeder = require("./seeders/productSeeders");
const adminSeeder = require("./seeders/adminSeeders");
const routes = require("./routes");
const app = express();
const port = process.env.APP_PORT || 8001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

routes(app);
//productSeeder();
//adminSeeder();

app.listen(port, () => console.log("Listening on: http://localhost:" + port));
