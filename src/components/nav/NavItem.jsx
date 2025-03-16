import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavItem({ icon, path, label, fillIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      to={path}
      className={({ isActive }) =>
        isActive
          ? "flex items-center  justify-center text-white-gray font-semibold bg-[#343a40] p-2 rounded-xl "
          : "flex items-center gap-2  text-white hover:fill-black"
      }
    >
      {({ isActive }) => (
        <div className="flex gap-2 items-center ">
          {isActive ? (
            <img className="sm-max:w-5 w-7" src={fillIcon} alt={label} />
          ) : (
            <img
              className="sm-max:w-5 w7"
              src={isHovered ? fillIcon : icon}
              alt={label}
            />
          )}
          {isActive && <p className="mb-1 ">{label}</p>}
        </div>
      )}
    </NavLink>
  );
}

export default NavItem;
