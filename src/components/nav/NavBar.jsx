import NavItem from "./NavItem";
import chart from "../../assets/icons/chart.svg";
import chartFill from "../../assets/icons/chartFill.svg";
import exercise from "../../assets/icons/exercise.svg";
import exerciseFill from "../../assets/icons/exerciseFill.svg";
import nutrition from "../../assets/icons/nutrition.svg";
import nutritionFill from "../../assets/icons/nutritionFill.svg";

function NavBar() {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-3  px-3 gap-3 h-14 sm:sticky  bg-white rounded-xl flex items-center justify-center font-anek text-base">
      <NavItem
        icon={exercise}
        fillIcon={exerciseFill}
        path={"/work"}
        label={"Work"}
      />
      <NavItem
        icon={chart}
        fillIcon={chartFill}
        path={"/"}
        label={"Dashboard"}
      />
      <NavItem
        icon={nutrition}
        fillIcon={nutritionFill}
        path={"/diet"}
        label={"Diet"}
      />
    </div>
  );
}
export default NavBar;
