const express = require("express");
require("dotenv").config();

const connectToDatabase = require("./src/config/database");
      
async function startServer() {
    const db = await connectToDatabase();
    const pets = db.collection("pets");

    const app = express();  

    app.use(express.json());  //Para ler o corpo das requisições como JSON.

    app.get("/", (req, res) => {
    res.send("Servidor do EncantoPet funcionando!");
    });

    app.post("/pets", async (req, res) => {

    const pet = req.body.nome;

    if (!pet || pet.trim() === "") {
    return res.status(400).send("O nome do pet é obrigatório!");
    }

    await pets.insertOne({
    nome: pet
    });

    console.log("Pet recebido:");
    console.log(pet);

    res.send(`Pet ${pet} cadastrado com sucesso!`);

    });

    app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
    });
}

startServer();