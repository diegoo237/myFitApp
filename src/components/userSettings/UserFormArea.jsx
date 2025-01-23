import { useState } from "react";
import UserSizeInput from "./UserSizeInput";
import UserWeightInput from "./UserWeightInput";
import UserSexInput from "./UserSexInput";
function UserFormArea({ icon, input }) {
  const [active, setActive] = useState();
  const [text, setText] = useState();

  const handleActiveInput = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <>
      <button onClick={handleActiveInput} className="flex gap-2">
        <img src={icon} alt="" />
        <p>{text}</p>
      </button>
      {input === "altura" ? (
        <UserSizeInput active={active} setText={setText} />
      ) : (
        ""
      )}
      {input === "peso" ? (
        <UserWeightInput active={active} setText={setText} />
      ) : (
        ""
      )}
      {input === "sexo" ? (
        <UserSexInput active={active} setText={setText} />
      ) : (
        ""
      )}
    </>
  );
}
export default UserFormArea;
