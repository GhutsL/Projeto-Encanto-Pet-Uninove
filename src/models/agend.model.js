const moogose = require('mongoose');

const agendSchema = new moogose.Schema({

    clientId: {
        type: moogose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    servicoId: {
        type: moogose.Schema.Types.ObjectId,
        ref: 'Servico',
        required: true
    },
    PetId: {
        type: moogose.Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'canceled'], default: 'pending'
    },
    date: { type: Date, required: true },

    timestamps: true
    });

const Agend = moogose.model("Agend", agendSchema);

module.exports = Agend;
