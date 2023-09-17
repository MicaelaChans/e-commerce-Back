require("dotenv").config();
require("./dbInitialSetup");
const express = require("express");
const productSeeder = require("./seeders/productSeeder");
const routes = require("./routes");
const app = express();
const port = process.env.APP_PORT || 8001;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
//productSeeder();

app.listen(port, () => console.log("Listening on: http://localhost:" + port));
