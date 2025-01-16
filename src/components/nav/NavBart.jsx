import NavItem from "./NavItem";
import chart from "../../assets/icons/chart.svg";
import weight from "../../assets/icons/weight.svg";
import carrot from "../../assets/icons/carrot.svg";

function NavBar() {
  return (
    <div className="h-16 bg-white rounded-xl flex items-center justify-center px-5 gap-4 font-anek text-base ">
      <NavItem icon={weight} path={"/work"} label={"Work"} />
      <NavItem icon={chart} path={"/"} label={"Dashboard"} />
      <NavItem icon={carrot} path={"/diet"} label={"Diet"} />
    </div>
  );
}
export default NavBar;
