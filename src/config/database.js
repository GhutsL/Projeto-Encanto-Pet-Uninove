
const { MongoClient } = require("mongodb");

// Cria o cliente de conexão com o MongoDB Atlas.
const client = new MongoClient(process.env.MONGODB_URI);

async function connectToDatabase() {
    try {
        await client.connect();

        console.log("Conectado ao MongoDB!");

        // Retorna o banco de dados do projeto.
        return client.db("encanto_pet");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        throw error;
    }
}

module.exports = connectToDatabase;
