import { Outlet, NavLink } from "react-router-dom";

const Header = ({ setToken }) => {
  return (
    <>
      <nav className="py-9 flex justify-center gap-x-12 sm:gap-x-14 md:gap-x-16 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-28  bg-graphite-black font-anek text-base text-[#F8F9FA]">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold"
              : "text-[#F8F9FA] opacity-85 hover:opacity-100"
          }
          to="/work"
        >
          Work
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold"
              : "text-[#F8F9FA] opacity-85 hover:opacity-100"
          }
          to="/"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold"
              : "text-[#F8F9FA] opacity-85 hover:opacity-100"
          }
          to="/diet"
        >
          Diet
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold"
              : "text-[#F8F9FA] opacity-85 hover:opacity-100"
          }
          onClick={() => setToken("")}
          to="/"
        >
          Sair
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};
export default Header;
