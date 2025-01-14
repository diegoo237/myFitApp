import { Link } from "react-router-dom";

function RegisterPop({ registered, setToken, username }) {
  return (
    <div
      className={
        registered
          ? "absolute flex flex-col gap-3	bg-graphite-black h-48 p-3 border-2 border-slate-100"
          : "hidden"
      }
    >
      <h1 className="text-white text-xl	">Registro realizado com sucesso</h1>
      <span className="flex gap-3	">
        <Link
          to="/"
          className="bg-violet-6 px-2 py-1"
          onClick={() => setToken(true)}
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
