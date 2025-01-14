import { useState } from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import RegisterPop from "../../components/auth/RegisterPop.jsx";
import { registerUser } from "../../api/registerUser";

function Register({ setToken }) {
  const [registered, setRegistered] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ username, email, password });
      setRegistered(true);
    } catch (error) {
      console.error("Erro na api de registro:", error);
    }
  };

  return (
    <main className="relative h-screen bg-graphite-black flex flex-col	justify-center items-center">
      <RegisterPop
        username={username}
        setToken={setToken}
        registered={registered}
      />
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
