const mongoose = require("mongoose")

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: false },
  gId: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: String, required: false },
  complement: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false, maxlength: 2 },
  zipCode: { type: String, required: false },
  password: { type: String, required: false },
  isActive: { type: Boolean, required: true, default: true},
}, {
  timestamps: true
})

const Client = mongoose.model("Client", ClientSchema)

module.exports = Client