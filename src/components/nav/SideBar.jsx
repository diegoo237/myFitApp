import SideBarItem from "./SideBarItem";
import { useLocation } from "react-router-dom";

import closeIcon from "../../assets/icons/close.svg";
import homeIcon from "../../assets/icons/home.svg";

function SideBar({ SetSideBarOpen }) {
  const location = useLocation();

  const handleHomeLocation = () => {
    return ["/work", "/", "/diet"].includes(location.pathname)
      ? location.pathname
      : "/";
  };
  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-gray-600/30 backdrop-blur ">
        <aside className="relative mmd:hidden bg-white w-52 h-screen p-3">
          <img
            onClick={() => SetSideBarOpen(false)}
            className="w-6 absolute left-56 top-3.5"
            src={closeIcon}
            alt={"icon"}
          />
          <ul>
            <SideBarItem
              path={handleHomeLocation()}
              name={"Home"}
              icon={homeIcon}
              SetSideBarOpen={SetSideBarOpen}
            />
            <SideBarItem
              path={"user"}
              name={"User"}
              icon={homeIcon}
              SetSideBarOpen={SetSideBarOpen}
            />
          </ul>
        </aside>
        <img
          onClick={() => SetSideBarOpen(false)}
          className="w-6 "
          src={closeIcon}
          alt={"icon"}
        />
      </div>
    </>
  );
}
export default SideBar;
