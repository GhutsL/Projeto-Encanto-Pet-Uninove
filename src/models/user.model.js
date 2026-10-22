const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: { require: true, type: String },
  email: { require: true, type: String, unique: true },
  password: { require: true, type: String },
  isActive: { type: Boolean, required: true, default: true},
})

const User = mongoose.model("User", UserSchema)

module.exports = User;