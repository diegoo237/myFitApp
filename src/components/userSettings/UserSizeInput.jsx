import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";

import { useState } from "react";

function UserSizeInput({ active, setText }) {
  const [meters, setMeters] = useState(177);
  const [centimeter, setCentimeter] = useState(7);
  setText(`${meters}.${centimeter} cm`);

  const handlePlusMeter = (e) => {
    e.preventDefault();
    setMeters(meters + 1);
  };
  const handleDecreaseMeter = (e) => {
    e.preventDefault();
    setMeters(meters - 1);
  };

  const handlePlusCentimeter = (e) => {
    e.preventDefault();
    setCentimeter(centimeter + 1);
  };
  const handleDecreaseCentimeter = (e) => {
    e.preventDefault();
    setCentimeter(centimeter - 1);
  };
  return (
    <div className={active ? "flex flex-col items-center" : "hidden"}>
      <span className="flex">
        <button onClick={handlePlusMeter}>
          <img src={arrowUp} alt="" />
        </button>
        <button onClick={handlePlusCentimeter}>
          <img src={arrowUp} alt="" />
        </button>
      </span>

      <input
        className="w-10 bg-[#242426] flex justify-items-center "
        type="text"
        value={`${meters}.${centimeter}`}
      />

      <span className="flex">
        <button onClick={handleDecreaseMeter}>
          <img src={arrowDown} alt="" />
        </button>
        <button onClick={handleDecreaseCentimeter}>
          <img src={arrowDown} alt="" />
        </button>
      </span>
    </div>
  );
}
export default UserSizeInput;
