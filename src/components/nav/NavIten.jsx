import { NavLink } from "react-router-dom";

function NavIten({ prop }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "text-white font-bold"
          : "text-black opacity-85 hover:opacity-100"
      }
      to="/work"
    >
      <img className="w-9" src={prop} alt="" />
    </NavLink>
  );
}
export default NavIten;
