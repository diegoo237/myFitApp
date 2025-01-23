import UserFormArea from "./UserFormArea";

import person from "../../assets/icons/person.svg";
import straighten from "../../assets/icons/straighten.svg";
import cake from "../../assets/icons/cake.svg";
import balance from "../../assets/icons/balance.svg";

function UserSettingsForm() {
  return (
    <form className="flex flex-col gap-3 w-72 text-white-gray">
      <fieldset className="flex flex-col bg-[#242426] p-4 gap-1 rounded-md">
        <label className="font-semibold">Nome</label>
        <input className="bg-[#242426] border-b py-1 text-sm" type="text" />
      </fieldset>
      <fieldset className="flex flex-col bg-[#242426] p-4 gap-1 rounded-md">
        <UserFormArea icon={person} input={"sexo"} />
        <UserFormArea icon={straighten} input={"altura"} />
        <UserFormArea icon={balance} input={"peso"} />
        <UserFormArea icon={cake} input={"aniversario"} />
      </fieldset>
    </form>
  );
}
export default UserSettingsForm;
