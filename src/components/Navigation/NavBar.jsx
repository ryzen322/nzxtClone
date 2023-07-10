import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import NavBarSelection from "./NavBarSelection";
import { useState } from "react";
import NavigationMobile from "./NavigationMobile";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle((state) => !state);
  };

  return (
    <>
      <header className="container mx-auto bg-white flex items-center p-4 relative w-full">
        <nav className=" w-full">
          <ul className=" text-stone-200 flex justify-between items-center ">
            <li className=" flex items-center text-black gap-4">
              <NavLink to="" className=" hidden">
                Gaming PCS
              </NavLink>
              <NavLink to="">
                <HiOutlineMenuAlt2 size="1.4rem" onClick={toggleNav} />
              </NavLink>
              <h1 className=" font-extrabold text-[1.35rem]">NZXT</h1>
            </li>
            <li>
              <NavLink className="text-[#7315e5] text-[23px] cursor-pointer">
                <BsCart2 />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {toggle && <NavigationMobile onclickfunction={toggleNav} />}

      {/* {toggle && <NavBarSelection />} */}
    </>
  );
};

export default NavBar;
