import { NavLink, useLocation } from "react-router-dom";
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
          ? "flex items-center gap-2 text-white-gray font-semibold bg-[#343a40] p-3 rounded-xl "
          : "flex items-center gap-2 text-white hover:fill-black"
      }
    >
      {({ isActive }) => (
        <>
          {isActive ? (
            <img className="w-7" src={fillIcon} alt={label} />
          ) : (
            <img
              className="w-7"
              src={isHovered ? fillIcon : icon}
              alt={label}
            />
          )}
          {isActive && <p className="flex items-center mb-1">{label}</p>}
        </>
      )}
    </NavLink>
  );
}

export default NavItem;
