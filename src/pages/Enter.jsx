import { Link } from "react-router-dom";
function Enter() {
  return (
    <main className="h-screen bg-graphite-black text-white px-28 py-28 flex flex-col gap-y-10 text-xl	">
      <h1 className="text-7xl leading-tight	font-bold font-mplus">
        Meet your new Fit <br />
        App Application
      </h1>
      <p className="text-gray-600 font-mplus font-medium">
        Remarkable results. Easier than email. Postcard marketing <br />
        reinvented for modern ecommerce.
      </p>
      <span className="flex gap-x-4">
        <Link
          className="bg-black py-2 px-5 rounded-3xl font-medium text-lg"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="bg-black py-2 px-5 rounded-3xl font-medium text-lg"
          to="/register"
        >
          Register
        </Link>
      </span>
    </main>
  );
}

export default Enter;
