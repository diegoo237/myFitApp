import person from "../assets/icons/person.svg";
import straighten from "../assets/icons/straighten.svg";
import cake from "../assets/icons/cake.svg";
import balance from "../assets/icons/balance.svg";
import UserFormBtn from "../components/userSettings/UserFormBtn";

function UserSettings() {
  return (
    <main className="h-screen bg-graphite-black flex flex-col gap-4 items-center">
      <div className="bg-gray-500 w-40 h-40 rounded-md"></div>
      <form className="flex flex-col gap-3 w-72 text-white-gray">
        <fieldset className="flex flex-col bg-[#242426] p-4 gap-1 rounded-md">
          <label className="font-semibold">Nome</label>
          <input className="bg-[#242426] border-b py-1 text-sm" type="text" />
        </fieldset>
        <fieldset className="flex flex-col bg-[#242426] p-4 gap-1 rounded-md">
          <UserFormBtn icon={person} text={"Masculino"} />
          <UserFormBtn icon={straighten} text={"177,7"} />
          <UserFormBtn icon={balance} text={"78,8 kg"} />
          <UserFormBtn icon={cake} text={"21/05/2004"} />
        </fieldset>
      </form>
    </main>
  );
}
export default UserSettings;
