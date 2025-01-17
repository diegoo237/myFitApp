import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";
import BarsBtn from "./BarsBtn";
import LogOutBtn from "./LogOutBtn";

const Header = ({ setToken }) => {
  return (
    <>
      <nav className=" w-full flex bg-graphite-black justify-between items-center p-4">
        <BarsBtn />
        <NavBar />
        <LogOutBtn setToken={setToken} />
      </nav>
      <Outlet />
    </>
  );
};
export default Header;
