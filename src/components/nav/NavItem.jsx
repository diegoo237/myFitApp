import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavItem({ icon, path, label }) {
  const location = useLocation();
  const [isActive, SetIsActive] = useState(location.pathname === path);
  const componentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      SetIsActive(false);
    }
  };
  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <NavLink
      ref={componentRef}
      className={
        isActive
          ? "flex items-center gap-2 text-white font-bold bg-black p-3 rounded-xl "
          : "text-black opacity-85 hover:opacity-100"
      }
      to={path}
    >
      <img className="w-7" src={icon} alt="" />
      {isActive && <p className="flex items-center mb-1">{label}</p>}
    </NavLink>
  );
}
export default NavItem;
