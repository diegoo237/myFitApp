const bcrypt = require("bcrypt");
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Conectado ao banco de dados com sucesso!");
  } catch (err) {
    console.log("Erro ao conectar:", err);
  }
}
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);

// Rota para criar um novo usuário
app.post("/users", async (req, res) => {
  const { email, username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Nome de Usuário ja em uso" });
  }
  const existingEmail = await User.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ message: "Email já em uso" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user: savedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar usuário", error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
