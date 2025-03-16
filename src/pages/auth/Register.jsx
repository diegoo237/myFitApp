import { useState } from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import RegisterPop from "../../components/auth/RegisterPop.jsx";
import { registerUser } from "../../api/auth/registerUser.js";
import BlurFilter from "../../components/Filters/BlurFilter.jsx";

function Register() {
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
      console.error(error);
    }
  };

  return (
    <main className="relative h-screen bg-graphite-black flex flex-col	justify-center items-center">
      {registered ? (
        <>
          <BlurFilter />
          <RegisterPop username={username} />
        </>
      ) : (
        ""
      )}
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
