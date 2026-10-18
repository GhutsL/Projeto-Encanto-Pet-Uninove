const express = require("express");
require("dotenv").config({ quiet: true });
const db = require("./src/config/database.js")

const app = express();
app.use(express.json());

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
  try {
    db()
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.log(`Error - ${error}`);
  }
});
