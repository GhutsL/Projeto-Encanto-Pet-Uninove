
const mongoose = require("mongoose");
require("dotenv").config({ quiet: true });

async function connectToDatabase() {
    try {
        mongoose.connect(process.env.mongo_uri);
        return console.log("Conectado ao MongoDB!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        throw error;
    }
}

module.exports = connectToDatabase;
