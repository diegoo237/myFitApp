import { useState } from "react";
import { loginUser } from "../../api/auth/loginUser";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

function Login({ setToken }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ username, password });
      setToken(response.token);
      localStorage.setItem("token", response.token);

      navigate("/");
    } catch (error) {
      alert("Usuario ou senha incorretos", error);
    }
  };

  return (
    <main className="h-screen bg-graphite-black flex justify-center items-center">
      <LoginForm
        handleLogin={handleLogin}
        setUserName={setUserName}
        setPassword={setPassword}
      />
    </main>
  );
}

export default Login;
