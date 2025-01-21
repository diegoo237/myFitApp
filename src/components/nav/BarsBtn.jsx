import userAtributes from "../../assets/icons/userAtributes.svg";

function BarsBtn({ SetSideBarOpen }) {
  return (
    <>
      <button onClick={() => SetSideBarOpen(true)}>
        <img className="w-7" src={userAtributes} alt="" />
      </button>
    </>
  );
}
export default BarsBtn;
