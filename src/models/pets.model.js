const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  personality: { type: String, required: true },
  medicalNeeds: { type: String, required: false },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  }
}, {
  timestamps: true
});

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet;