const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");

dotenv.config();

const User = require("./models/UserModel");
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

// Rota para criar um novo usuário
app.post("/users", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
  } catch (error) {
    console.error("Erro ao criar usuário:", error.message);
    res.status(500);
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
