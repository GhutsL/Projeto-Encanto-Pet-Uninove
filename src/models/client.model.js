const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: true },
  complement: { type: String, required: false },
  city: { type: String, required: true },
  state: { type: String, required: true, maxlength: 2 },
  zipCode: { type: String, required: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, required: true, default: true},
}, {
  timestamps: true
})

const Client = mongoose.model("Client", ClientSchema)

module.exports = Client