import { IoClose } from "react-icons/io5";
import BackdropUI from "../../UI/Backdrop";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Gaming from "./GamingUnits/Gaming";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../../store/chipsetSlice";

const SectionNav = ({ onclickfunction }) => {
  const eventPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <BackdropUI onclickfunction={onclickfunction}>
      <div
        className="block lg:hidden absolute h-[95%] w-[92%] bg-white top-0 -left-[1.5px] px-4 pb-2 pt-[15px] z-[60]"
        onClick={eventPropagation}
      >
        <div className=" flex items-center space-x-4">
          <IoClose
            className=" text-2xl cursor-pointer"
            onClick={() => onclickfunction()}
          />
          <h1 className=" font-extrabold text-[1.35rem]">NZXT</h1>
        </div>
        <NavigationItemsList />
      </div>
    </BackdropUI>
  );
};

const NavigationItemsList = () => {
  const navlistItems = useSelector((state) => state.chipset.navlistItems);
  const dispatch = useDispatch();

  console.log(navlistItems);

  return (
    <>
      <ul className=" mt-4 flex flex-col space-y-8 relative px-4">
        {navlistItems.map((item) => (
          <li
            key={item.id}
            className=" flex justify-between items-center cursor-pointer"
            onClick={() => dispatch(toggleNav({ id: item.id }))}
          >
            <Link className=" text-lg font-semibold">{item.itemName}</Link>
            <MdNavigateNext className=" text-[25px]" />

            <Gaming
              key={item.id}
              id={item.id}
              itemArray={item.itemArray}
              img={item.img}
              color={item.color}
              text={item.text}
              toggleItems={item.toggleNav}
              itemName={item.itemName}
            />
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
    </>
  );
};

const NavigationMobile = ({ onclickfunction }) => {
  return (
    <>
      {createPortal(
        <SectionNav onclickfunction={onclickfunction} />,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default NavigationMobile;
