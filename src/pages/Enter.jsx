import { Link } from "react-router-dom";
function Enter() {
  return (
    <main className="h-screen bg-graphite-black text-white flex justify-center items-center gap-x-12">
      <Link className="bg-black py-2 px-3 rounded-lg font-medium" to="/login">
        Login
      </Link>
      <Link
        className="bg-black py-2 px-3 rounded-lg font-medium"
        to="/register"
      >
        Register
      </Link>
    </main>
  );
}

export default Enter;
