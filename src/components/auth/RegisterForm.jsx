import TextInput from "./TextInput";

function RegisterForm({
  handleRegister,
  email,
  setEmail,
  setUserName,
  setPassword,
}) {
  return (
    <form
      className="text-white	flex flex-col w-64 sm:w-72 md:w-80 lg:w-96 xl:w-2/6 gap-y-3"
      onSubmit={handleRegister}
    >
      <label className="mb-7 self-center lg:self-start font-livvic text-5xl md:text-6xl lg:text-7xl text-white font-thin">
        REGISTER
      </label>
      <TextInput
        label="Username"
        onChange={(e) => setUserName(e.target.value)}
        placeholder="zack"
      />
      <TextInput
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="zack@hotmail.com"
      />
      <TextInput
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder=""
      />
      <button className="mt-9 bg-violet-6 h-11 font-mplus font-bold text-charcoal-gray rounded">
        REGISTER
      </button>
    </form>
  );
}
export default RegisterForm;
