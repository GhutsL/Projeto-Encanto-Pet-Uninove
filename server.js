const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor do EncantoPet funcionando!");
});

app.post("/pets", (req, res) => {

    const pet = req.body.nome;

if (!pet || pet.trim() === "") {
    return res.status(400).send("O nome do pet é obrigatório!");
}

    console.log("Pet recebido:");
    console.log(pet);

    res.send(`Pet ${pet} cadastrado com sucesso!`);

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});