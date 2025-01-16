import logout from "../../assets/icons/logout.svg";

function LogOutBtn({ setToken }) {
  return (
    <button onClick={() => setToken("")} to="/">
      <img className="w-7" src={logout} alt="" />
    </button>
  );
}
export default LogOutBtn;
