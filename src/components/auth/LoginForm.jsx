function AuthForm({ handleLogin, setUserName, setPassword }) {
  return (
    <form
      className="text-white	flex flex-col w-64 sm:w-72 md:w-80 lg:w-96 xl:w-2/6 gap-y-3"
      onSubmit={handleLogin}
    >
      <label className="mb-7 self-center lg:self-start font-livvic text-5xl md:text-6xl lg:text-7xl text-white font-thin">
        LOGIN
      </label>

      <div className="flex flex-col">
        <label className="text-gray-300 font-mplus">Username</label>
        <input
          type="text"
          aria-label="Username"
          placeholder="zack"
          className="h-11 bg-graphite-black px-1.5 border-neutral-gray border-2 rounded"
          required
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>

      <div className="flex flex-col">
        <label className="text-gray-300	 font-mplus">Password</label>

        <input
          type="password"
          aria-label="password"
          className="h-11 bg-graphite-black px-1.5 border-neutral-gray border-2 rounded"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>

      <button className="mt-9 bg-violet-6 h-11 font-mplus font-bold text-charcoal-gray rounded">
        Login
      </button>
    </form>
  );
}
export default AuthForm;
