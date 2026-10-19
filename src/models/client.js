const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  phone: { type: String, require: true },
  street: { type: String, require: true },
  number: { type: String, require: true },
  complement: { type: String, require: false },
  city: { type: String, require: true },
  state: { type: String, require: true, maxlength: 2 },
  zipCode: { type: String, require: true },
  password: { type: String, require: true },
  isActive: { type: Boolean, required: true, default: true},
}, {
  timestamps: true
})

const Client = mongoose.model("Client", clientSchema,)

module.exports = Client