const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  isActive: { type: Boolean, required: true, default: true},
  role: { type: String, required: true, default: "staff", enum: ["admin", "staff"]},
}, {
  timestamps: true
})

const User = mongoose.model("User", UserSchema)

module.exports = User