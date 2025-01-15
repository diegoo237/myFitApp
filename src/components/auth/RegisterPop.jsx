import { Link } from "react-router-dom";

function RegisterPop({ registered, setToken, username }) {
  return (
    <div
      className={
        "absolute flex flex-col gap-3	bg-graphite-black h-48 p-3 border-2 border-slate-100"
      }
    >
      <h1 className="text-white text-xl	">Registro realizado com sucesso</h1>
      <span className="flex gap-3	">
        <Link
          className="bg-violet-6 px-2 py-1"
          onClick={() => setToken(true)}
          to="/"
        >
          Conectar como {username}
        </Link>
        <Link to="/login" className="bg-violet-6 px-2 py-1">
          Conectar com outra conta
        </Link>
      </span>
    </div>
  );
}
export default RegisterPop;
