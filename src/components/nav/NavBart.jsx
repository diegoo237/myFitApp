import NavIten from "./NavIten";

import chart from "../../assets/icons/chart.svg";
import weight from "../../assets/icons/weight.svg";
import carrot from "../../assets/icons/carrot.svg";

function NavBar() {
  return (
    <div className="bg-white w-96 rounded-xl flex justify-center py-1 px-3 gap-4 font-anek text-base ">
      <NavIten prop={weight} />
      <NavIten prop={chart} />
      <NavIten prop={carrot} />
    </div>
  );
}
export default NavBar;
