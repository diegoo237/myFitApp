import { useNavigate } from "react-router-dom";

function Login({ setUserlog }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setUserlog(true);
    navigate("/");
  };

  return (
    <main className="h-screen bg-graphite-black flex justify-center items-center">
      <div className="text-white flex flex-col	w-80 gap-y-4">
        <h1 className="">LOGIN</h1>
        <input className="h-11 bg-graphite-black px-1.5 border-2 rounded"></input>
        <input className="h-11 bg-graphite-black px-1.5 border-2 rounded"></input>
        <button
          onClick={handleLogin}
          className="bg-violet-6 text-black h-11 rounded"
        >
          Login
        </button>
      </div>
    </main>
  );
}

export default Login;
