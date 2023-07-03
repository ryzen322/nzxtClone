import { NavLink } from "react-router-dom";

import { MdOutlineNavigateNext } from "react-icons/md";
import NavBarItem from "./NavBarItem";

const NavBarSelection = () => {
  return (
    <div className=" absolute h-auto w-[26rem] bg-Main-Color rounded-2xl top-[3.5rem] left-[0.15rem] z-50 p-5 flex flex-col gap-4">
      <nav className=" w-full flex flex-col">
        <ul className=" text-stone-200 flex flex-col gap-4 font-bold">
          <li className=" flex items-center gap-2">
            <NavLink> BUILD A CUSTOM PC</NavLink>
            <MdOutlineNavigateNext size="1.75rem" className=" ml-auto" />
          </li>
          <li className=" flex items-center gap-2">
            <NavLink>PREBUILT GAMING PCS</NavLink>
            <MdOutlineNavigateNext size="1.75rem" className=" ml-auto" />
          </li>
        </ul>
        <NavBarItem />
      </nav>
      <div className=" w-full h-full bg-blue-600 rounded-lg flex flex-col items-center justify-between">
        <div className=" flex flex-col text-white text-center mt-5">
          <h1 className=" font-semibold">BUILD A CUSTOM PC</h1>
          <p className=" font-normal text-base">
            You create it and we build it.
          </p>
        </div>
        <img
          className=" cursor-pointer scale-110 hover:scale-125 ease-out transition-all"
          src={
            "https://nzxt.com/assets/cms/34299/1621638411-case-cut-fade-mid.png?auto=format&fit=clip&h=270&w=270"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBarSelection;
