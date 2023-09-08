const pageRoutes = require("./pageRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

function routes(app) {
  app.use(makeUserAvailableInViews);
  app.use(pageRoutes);
  app.use(authRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/admins", adminRoutes);
  app.use("/orders", orderRoutes);
  app.use("/categories", categoryRoutes);
}

module.exports = routes;
