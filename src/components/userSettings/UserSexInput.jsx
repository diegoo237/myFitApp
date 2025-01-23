function UserSexInput({ active, setText }) {
  setText(`teste`);

  return (
    <div className={active ? "flex flex-col items-start gap-2" : "hidden"}>
      <span className="flex gap-2">
        <input type="radio"></input>
        <label>Masculino</label>
      </span>
      <span className="flex gap-2">
        <input type="radio"></input>
        <label>Feminino</label>
      </span>
    </div>
  );
}
export default UserSexInput;
