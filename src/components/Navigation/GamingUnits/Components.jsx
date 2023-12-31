import NavigationUnits from "../../../UI/NavigationUnits";
import { IoClose } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Components = ({
  toggleFunction,
  toggleItems,
  itemArray = [],
  img,
  color,
  text,
}) => {
  const preventPropogation = (event) => {
    event.stopPropagation();
  };
  return (
    <NavigationUnits toggleItems={toggleItems}>
      <div className="" onClick={preventPropogation}>
        <div className=" flex items-center space-x-4">
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={toggleFunction}
          />
          <h1 className=" font-extrabold text-[1.35rem]">NZXT</h1>
        </div>
        <div className=" flex items-center border-b  border-gray-600/40 py-4">
          <MdNavigateNext
            className=" text-[25px] rotate-180 cursor-pointer"
            onClick={toggleFunction}
          />
          <h1 className=" mx-auto text-lg font-[500] text-black/70 ">
            Gaming PCs
          </h1>
        </div>
        <ul className=" mt-4 flex flex-col space-y-4 relative">
          {itemArray.map((item) => (
            <li
              key={item.id}
              className=" flex justify-between items-center cursor-pointer"
            >
              <h1 className="text-lg font-[500] text-black/70 ">{item.data}</h1>
            </li>
          ))}
          <div className="">
            <li className=" flex items-center gap-3 border-t border-black/30 py-3 border-b">
              <AiOutlineQuestionCircle className=" text-2xl text-[#7315e5]" />
              <Link className=" text-base ">Support</Link>
            </li>
            <li className=" flex items-center gap-3 py-3 ">
              <AiOutlineQuestionCircle className=" text-2xl text-[#7315e5]" />
              <Link className=" text-base ">Sign In / Sign Up</Link>
            </li>
          </div>
        </ul>
        <div
          className={`w-full h-[8rem] grid grid-cols-2 px-2 pt-2 bg-gradient-to-r  cursor-pointer group overflow-hidden ${color}`}
        >
          <div className=" flex items-center flex-col justify-center text-white">
            <h1 className=" font-semibold text-lg">{text}</h1>
            <p>More Options. Greater</p>
            <p className=" leading-4">Performance.</p>
          </div>
          <div className="flex items-center">
            <img
              className=" cursor-pointer group-hover:scale-110 transition-all w-full h-full object-cover"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </NavigationUnits>
  );
};

export default Components;
