import { Link } from "react-router-dom";

function SignUpSection() {
  return (
    <div className="h-12 p-1 bg-white rounded-sm flex">
      <input
        className="h-full p-2 text-black rounded-sm mr-2"
        type="email"
        placeholder="Enter your email"
      />
      <Link className="h-full p-2 rounded-sm bg-violet-6" to="/register">
        Sign up for MyFitApp
      </Link>
    </div>
  );
}

export default SignUpSection;
