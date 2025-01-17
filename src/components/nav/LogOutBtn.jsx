import logout from "../../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";

function LogOutBtn({ setToken }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    navigate("/");
  };

  return (
    <button onClick={() => handleLogout()} to="/">
      <img className="w-7" src={logout} alt="" />
    </button>
  );
}
export default LogOutBtn;
