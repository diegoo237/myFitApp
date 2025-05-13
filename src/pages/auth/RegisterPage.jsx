import { useState } from "react";
import { registerUser } from "../../services/registerUserService";
import { useNavigate, useLocation } from "react-router-dom";

import RegisterForm from "../../components/auth/RegisterForm";

function RegisterPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState(state?.email || "");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); // Estado para exibir mensagem de sucesso

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password });
      registerTimeOut();
    } catch (error) {
      console.error(error);
    }
  };

  function registerTimeOut() {
    setIsSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }

  return (
    <main className="relative h-screen bg-graphite-black flex flex-col justify-center items-center">
      {isSuccess ? (
        <div className="text-white text-lg font-semibold animate-pulse">
          Registro realizado com sucesso! Redirecionando para login...
        </div>
      ) : (
        <RegisterForm
          handleRegister={handleRegister}
          email={email}
          setEmail={setEmail}
          setUserName={setUserName}
          setPassword={setPassword}
        />
      )}
    </main>
  );
}

export default RegisterPage;
