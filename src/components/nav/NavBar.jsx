import NavItem from "./NavItem";
import chart from "../../assets/icons/chart.svg";
import chartFill from "../../assets/icons/chartFill.svg";
import exercise from "../../assets/icons/exercise.svg";
import exerciseFill from "../../assets/icons/exerciseFill.svg";
import nutrition from "../../assets/icons/nutrition.svg";
import nutritionFill from "../../assets/icons/nutritionFill.svg";

function NavBar() {
  return (
    <div className="sm-max:min-w-60 sm-max:fixed sm-max:bottom-4 sm-max:left-1/2 sm-max:-translate-x-1/2 sm-max:h-14 h-16 px-5 bg-white rounded-xl flex items-center justify-center gap-4 font-anek text-base ">
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
