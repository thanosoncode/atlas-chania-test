const Menu = ({ open, onClick }: { open: boolean; onClick: () => void }) => {
  return (
    <div
      className={`flex flex-col gap-1.5 w-min p-1.5 bg-white justify-center items-center  duration-200 relative h-[32px] cursor-pointer ${
        open ? "" : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`block w-6 h-0.5 bg-gray-600 duration-300 ${
          open
            ? " absolute rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : ""
        }`}
      ></span>
      <span
        className={`block w-6  h-0.5 ${
          open ? "bg-white" : "bg-gray-600"
        } duration-300`}
      ></span>
      <span
        className={`block w-6  h-0.5 bg-gray-600 duration-300 ${
          open
            ? "absolute -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : ""
        }`}
      ></span>
    </div>
  );
};
export default Menu;
