const moongeose = require('mongoose');

const serviceSchema = new moongeose.Schema({   

    name: { type: String, required: true },
    value: { type: Number, required: true },
    duration: { type: Number, required: true },
    isActive: { type: Boolean, required: true, default: true },
}, {
    timestamps: true
});

const Servico = mongoose.model("Servico", serviceSchema);

module.exports = Servico;
