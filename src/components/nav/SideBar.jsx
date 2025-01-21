function SideBar({ SetSideBarOpen }) {
  return (
    <>
      <aside className="fixed top-0 w-full h-screen bg-gray-600/30 backdrop-blur ">
        <div className="mmd:hidden bg-white w-52 h-screen">
          <button onClick={() => SetSideBarOpen(false)}>X</button>
        </div>
        <button className="sm:hidden" onClick={() => SetSideBarOpen(false)}>
          X
        </button>
      </aside>
    </>
  );
}
export default SideBar;
