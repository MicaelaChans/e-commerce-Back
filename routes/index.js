const pageRoutes = require("./pageRoutes");
const authRoutes = require("./authRoutes");
const authAdminRoutes = require("./authAdminRoutes");
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");
//const makeUserAvailableInViews = require("../middlewares/makeUserAvailableInViews");

function routes(app) {
  //app.use(makeUserAvailableInViews);
 
  app.use(authRoutes);
  app.use(authAdminRoutes);
  app.use(pageRoutes);
  app.use("/users", userRoutes);
  app.use("/products", productRoutes);
  app.use("/admins", adminRoutes);
  app.use("/orders", orderRoutes);
  app.use("/categories", categoryRoutes);
}

module.exports = routes;
