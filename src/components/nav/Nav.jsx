import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import BarsBtn from "./BarsBtn";
import LogOutBtn from "./LogOutBtn";
import SideBar from "./SideBar";

const Nav = ({ setToken, SetSideBarOpen }) => {
  return (
    <>
      <nav className=" w-full flex bg-graphite-black justify-between items-center p-4">
        <BarsBtn SetSideBarOpen={SetSideBarOpen} />
        <NavBar />
        <LogOutBtn setToken={setToken} />
      </nav>
      <Outlet />
    </>
  );
};
export default Nav;
