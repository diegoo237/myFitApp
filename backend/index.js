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
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.send("App está funcionando!");
});

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).send("Erro ao registrar o usuário", err);
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
