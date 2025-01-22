import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import BarsBtn from "./BarsBtn";
import LogOutBtn from "./LogOutBtn";

const Nav = ({ setToken, SetSideBarOpen }) => {
  const location = useLocation();

  const handleNav = () => {
    if (["/work", "/", "/diet"].includes(location.pathname)) {
      return <NavBar />;
    }
  };

  return (
    <>
      <nav className=" w-full flex bg-graphite-black justify-between items-center p-4">
        <BarsBtn SetSideBarOpen={SetSideBarOpen} />
        {handleNav()}
        <LogOutBtn setToken={setToken} />
      </nav>
      <Outlet />
    </>
  );
};
export default Nav;
