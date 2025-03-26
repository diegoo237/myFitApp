import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpSection() {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form className="h-12 p-1 bg-white rounded-sm flex">
      <input
        required
        className="h-full p-2 text-black rounded-sm mr-2"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        aria-label="Email address"
      />
      <Link
        className="h-full p-2 bg-violet-6"
        to={email && email.includes("@") ? "/register" : "#"}
        state={{ email }}
      >
        Sign up for MyFitApp
      </Link>
    </form>
  );
}

export default SignUpSection;
