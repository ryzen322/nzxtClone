import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import NavBarSelection from "./NavBarSelection";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className=" bg-[#313235] flex items-center p-4 relative">
        <nav>
          <ul className=" text-stone-200 ">
            <li>
              <NavLink to="" className=" hidden">
                Gaming PCS
              </NavLink>
              <NavLink to="">
                <HiOutlineMenuAlt2
                  size="1.4rem"
                  onClick={() => setToggle((state) => !state)}
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {toggle && <NavBarSelection />}
    </>
  );
};

export default NavBar;
