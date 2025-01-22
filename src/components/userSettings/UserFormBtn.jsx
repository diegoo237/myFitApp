function UserFormBtn({ icon, text }) {
  return (
    <button className="flex gap-2">
      <img src={icon} alt="" />
      <p>{text}</p>
    </button>
  );
}
export default UserFormBtn;
