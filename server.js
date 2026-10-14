<<<<<<< HEAD
const express = require("express");
require("dotenv").config({ quiet: true });

const app = express();
app.use(express.json());

// const connectToDatabase = require("./src/config/database");

// async function startServer() {
//   const db = await connectToDatabase();
//   const pets = db.collection("pets");

//   app.post("/pets", async (req, res) => {
//     const pet = req.body.nome;

//     if (!pet || pet.trim() === "") {
//       return res.status(400).send("O nome do pet é obrigatório!");
//     }

//     await pets.insertOne({
//       nome: pet,
//     });

//     console.log("Pet recebido:");
//     console.log(pet);

//     res.send(`Pet ${pet} cadastrado com sucesso!`);
//   });

//   app.listen(3000, () => {
//     console.log("Servidor rodando na porta 3000");
//   });
// }

app.get("/", (req, res) => {
  res.send("EncantoPet server is working!");
});

// Routes
const userRoutes = require("./src/routes/user.routes.js")
const serviceRoutes = require("./src/routes/service.routes.js")
const scheduleRoutes = require("./src/routes/schedule.routes.js")

app.use("/api/user", userRoutes)
app.use("/api/service", serviceRoutes)
app.use("/api/schedule", scheduleRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
=======
require("dotenv").config();

const express = require("express");
const connectToDatabase = require("./src/config/database");

async function startServer() {
    const db = await connectToDatabase();
    const pets = db.collection("pets");

    const app = express();
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Servidor do Petshop funcionando!");
    });

    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
}

startServer().catch((error) => {
    console.error("Não foi possível iniciar o servidor.");
});
>>>>>>> 1a81aca (Adicionando o CRUD)
