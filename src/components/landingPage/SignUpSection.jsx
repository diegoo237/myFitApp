import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpSection() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (email && email.includes("@")) {
      navigate("/register", { state: { email } });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <form className="h-12 p-1 bg-white rounded-sm flex" onSubmit={handleClick}>
      <input
        required
        className="h-full p-2 text-black rounded-sm mr-2"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        aria-label="Email address"
      />
      <button type="submit" className="h-full p-2 bg-violet-6">
        Sign up for MyFitApp
      </button>
    </form>
  );
}

export default SignUpSection;
