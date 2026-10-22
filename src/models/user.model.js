const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
  isActive: { required: true, type: Boolean, default: true },
}, {
  timestamps: true
});

const User = mongoose.model("User", UserSchema)

module.exports = User;