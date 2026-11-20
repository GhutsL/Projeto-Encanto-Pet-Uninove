const mongoose = require("mongoose");

const agendSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    servicos: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Servico",
        },
      ],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "É necessário informar pelo menos um serviço.",
      },
    },
    petId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "canceled"],
      default: "pending",
    },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

const Agend = mongoose.model("Agend", agendSchema);

module.exports = Agend;
