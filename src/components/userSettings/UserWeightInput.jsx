import arrowUp from "../../assets/icons/arrowUp.svg";
import arrowDown from "../../assets/icons/arrowDown.svg";

import { useState } from "react";

function UserWeightInput({ active, setText }) {
  const [kg, setKg] = useState(74);
  const [grans, setGrans] = useState(7);
  setText(`${kg}.${grans} kg`);

  const handlePlusMeter = (e) => {
    e.preventDefault();
    setKg(kg + 1);
  };
  const handleDecreaseMeter = (e) => {
    e.preventDefault();
    setKg(kg - 1);
  };

  const handlePlusCentimeter = (e) => {
    e.preventDefault();
    setGrans(grans + 1);
  };
  const handleDecreaseCentimeter = (e) => {
    e.preventDefault();
    setGrans(grans - 1);
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
        value={`${kg}.${grans}`}
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
export default UserWeightInput;
