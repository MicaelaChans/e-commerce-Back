const authRoutes = require("./authRoutes");
const authAdminRoutes = require("./authAdminRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");

function routes(app) {
  app.use(authRoutes);
  app.use(authAdminRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/admins", adminRoutes);
  app.use("/orders", orderRoutes);
  app.use("/categorys", categoryRoutes);
}

module.exports = routes;
