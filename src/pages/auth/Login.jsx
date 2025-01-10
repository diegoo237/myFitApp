import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

function Login({ setUserlog }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setUserlog(true);
    navigate("/");
  };

  return (
    <main className="h-screen bg-graphite-black flex justify-center items-center">
      <LoginForm handleLogin={handleLogin} />
    </main>
  );
}

export default Login;
