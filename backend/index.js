const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const User = require("./models/UserModel");

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

// rota para criar um novo usuário
app.post("/register", async (req, res) => {
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

// rota para verificar o login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ message: "login bem-sucedido", token });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro no servidor", error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
