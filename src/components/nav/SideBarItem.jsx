import { NavLink } from "react-router-dom";

function SideBarItem({ path, icon, SetSideBarOpen, name }) {
  return (
    <li className="p-2">
      <NavLink
        onClick={() => SetSideBarOpen(false)}
        className="flex  gap-2"
        to={path}
      >
        <img className="" src={icon} />
        <p className="text-balck font-semibold">{name}</p>
      </NavLink>
    </li>
  );
}
export default SideBarItem;
