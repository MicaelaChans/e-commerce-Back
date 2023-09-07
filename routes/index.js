const pageRoutes = require("./pageRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

function routes(app) {
  app.use(makeUserAvailableInViews);
  app.use(pageRoutes);
  app.use(authRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
}

module.exports = routes;
