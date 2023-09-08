const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    products: [{}],
  },
  { timestamps: true }
);

orderSchema.set("toJSON", { virtuals: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
