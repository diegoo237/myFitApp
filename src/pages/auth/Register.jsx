import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  return (
    <main className="h-screen bg-graphite-black flex flex-col	justify-center items-center">
      <RegisterForm handleRegister={handleRegister} />
    </main>
  );
}

export default Register;
