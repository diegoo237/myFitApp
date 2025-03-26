import { useState } from "react";
import { registerUser } from "../../api/auth/registerUser.js";
import { useLocation } from "react-router-dom";

import RegisterForm from "../../components/auth/RegisterForm";
import RegisterPop from "../../components/auth/RegisterPop.jsx";
import BlurFilter from "../../components/Filters/BlurFilter.jsx";

function RegisterPage() {
  const { state } = useLocation();
  const [registered, setRegistered] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState(state?.email || "");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password });
      setRegistered(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="relative h-screen bg-graphite-black flex flex-col	justify-center items-center">
      {registered && (
        <>
          <BlurFilter />
          <RegisterPop username={username} />
        </>
      )}
      <RegisterForm
        handleRegister={handleRegister}
        email={email}
        setEmail={setEmail}
        setUserName={setUserName}
        setPassword={setPassword}
      />
    </main>
  );
}

export default RegisterPage;
