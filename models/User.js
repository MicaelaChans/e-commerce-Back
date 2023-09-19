const mongoose = require("../dbInitialSetup");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  adress: String,
  phone: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  resetToken: String,
  resetTokenExpire: Date,
});

userSchema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
