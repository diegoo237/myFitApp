import { useState } from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import { registerUser } from "../../api/userService";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser({ username, email, password });
      console.log("Usuário registrado com sucesso:", response);
    } catch (error) {
      if (error.message.includes("Erro 404")) {
        console.error("Rota não encontrada: ", error.message);
      } else {
        console.error("Erro ao realizar o registro:", error);
      }
    }
  };

  return (
    <main className="h-screen bg-graphite-black flex flex-col	justify-center items-center">
      <RegisterForm
        handleRegister={handleRegister}
        setEmail={setEmail}
        setUserName={setUserName}
        setPassword={setPassword}
      />
    </main>
  );
}

export default Register;
