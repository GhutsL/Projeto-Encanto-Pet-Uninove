const connectToDatabase = require("./src/config/database");

const { MongoClient } = require("mongodb");         //Usado para conectar ao MongoDB.

const client = new MongoClient(process.env.MONGODB_URI);        //Endereço usado do MongoDB Atlas.

const db = client.db("encanto_pet");
const pets = db.collection("pets");

async function connectToDatabase() {        //Função para conectar ao MongoDB.
    try {       //Tenta conectar ao MongoDB.
        await client.connect();         //Conecta ao MongoDB.
        console.log("Conectado ao MongoDB!");
    } catch (error) {   //Se houver algum erro ao conectar ao MongoDB, exibe o erro no console.
        console.error("Erro ao conectar ao MongoDB:", error);
    }
}

module.exports = { client, db, pets, connectToDatabase };