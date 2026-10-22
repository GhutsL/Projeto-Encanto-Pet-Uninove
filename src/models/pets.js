const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, require: true },
  breed: { type: String, require: true },
  personality: { type: String, require: true },
  medicalNeeds: { type: String, require: true },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    require: true
  }

}, {
  timestamps: true
});

const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet;