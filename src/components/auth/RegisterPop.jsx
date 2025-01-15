import { useNavigate, Link } from "react-router-dom";

function RegisterPop({ registered, setToken, username, handleLogin }) {
  const navigate = useNavigate();

  const handleLoginAndNavigate = async () => {
    await handleLogin();
    navigate("/");
  };
  return (
    <div
      className={
        "absolute flex flex-col gap-3	bg-graphite-black h-48 p-3 border-1 rounded-md border-slate-100"
      }
    >
      <h1 className="text-white text-2xl font-semibold">
        Registro realizado com sucesso
      </h1>
      <span className="flex gap-3	">
        <button
          className="bg-violet-6 px-2 py-1"
          onClick={handleLoginAndNavigate}
        >
          Conectar como {username}
        </button>
        <button className="bg-violet-6 px-2 py-1" onClick={() => navigate("/")}>
          Conectar com outra conta
        </button>
      </span>
    </div>
  );
}
export default RegisterPop;
