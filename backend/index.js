const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// rotas de autenticação
const authRoutes = require("./routes/frontControllerAuth");

dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`Conectado ao banco de dados: ${mongoose.connection.name}`);
  } catch (err) {
    console.log("Erro ao conectar:", err);
  }
}
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
