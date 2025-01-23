import UserSettingsForm from "../components/userSettings/UserSettingsForm";

function UserSettings() {
  return (
    <main className="h-screen bg-graphite-black flex flex-col gap-4 items-center">
      <div className="bg-gray-500 w-40 h-40 rounded-md"></div>
      <UserSettingsForm />
    </main>
  );
}
export default UserSettings;
