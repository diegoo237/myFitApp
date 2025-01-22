import Nav from "./components/nav/Nav";
import SideBar from "./components/nav/SideBar";
import { useState } from "react";

const Layout = ({ setToken }) => {
  const [sideBarOpen, SetSideBarOpen] = useState();

  return (
    <div className="relative">
      <Nav setToken={setToken} SetSideBarOpen={SetSideBarOpen} />
      {sideBarOpen && <SideBar SetSideBarOpen={SetSideBarOpen} />}
    </div>
  );
};

export default Layout;
