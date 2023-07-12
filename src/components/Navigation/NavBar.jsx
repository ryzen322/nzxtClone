import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavigationMobile from "./NavigationMobile";
import { BsCart2 } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import GamingPCs from "../Navigation/NavigationDropdown/GamingPCs";
import ComponentsPc from "./NavigationDropdown/ComponentsPc";
import MonitorPc from "./NavigationDropdown/MonitorPc";
import PeripheralsPc from "./NavigationDropdown/PeripheralsPc";
import SoftwarePc from "./NavigationDropdown/SoftwarePc";
import CommunityPc from "./NavigationDropdown/CommunityPc";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [gamingToggle, setGamingToggle] = useState(false);
  const [componentsToggle, setComponentsToggle] = useState(false);
  const [monitorsToggle, setMonitorsToggle] = useState(false);
  const [peripheralsToggle, setPeripherals] = useState(false);
  const [softwareToggle, setSoftwareToggle] = useState(false);
  const [communityToggle, setCommunityToggle] = useState(false);

  const toggleNav = () => {
    setToggle((state) => !state);
  };

  const gamingPcToggle = () => {
    setGamingToggle((state) => !state);
    setComponentsToggle(false);
    setMonitorsToggle(false);
    setPeripherals(false);
    setSoftwareToggle(false);
    setCommunityToggle(false);
  };
  const componentsPcToggle = () => {
    setComponentsToggle((state) => !state);
    setGamingToggle(false);
    setMonitorsToggle(false);
    setPeripherals(false);
    setSoftwareToggle(false);
    setCommunityToggle(false);
  };
  const monitorPcToggle = () => {
    setMonitorsToggle((state) => !state);
    setGamingToggle(false);
    setComponentsToggle(false);
    setPeripherals(false);
    setSoftwareToggle(false);
    setCommunityToggle(false);
  };
  const peripheralsPcToggle = () => {
    setPeripherals((state) => !state);
    setGamingToggle(false);
    setComponentsToggle(false);
    setMonitorsToggle(false);
    setSoftwareToggle(false);
    setCommunityToggle(false);
  };
  const softwarePcToggle = () => {
    setSoftwareToggle((state) => !state);
    setCommunityToggle(false);
    setGamingToggle(false);
    setComponentsToggle(false);
    setMonitorsToggle(false);
    setPeripherals(false);
  };
  const communityPcToggle = () => {
    setCommunityToggle((state) => !state);
    setGamingToggle(false);
    setComponentsToggle(false);
    setMonitorsToggle(false);
    setPeripherals(false);
    setSoftwareToggle(false);
  };

  return (
    <>
      <header className="  flex items-center fixed top-0 left-0 bg-white z-50 p-4  w-full lg:bg-[#313235] lg:z-[200]">
        <nav className=" container mx-auto w-full ">
          <ul className=" text-stone-200 flex items-center lg:gap-2">
            <li className=" flex items-center text-black gap-4">
              <div className=" cursor-pointer">
                <HiOutlineMenuAlt2
                  size="1.4rem"
                  onClick={toggleNav}
                  className="block lg:hidden"
                />
              </div>
            </li>
            <li className=" text-black block lg:bloc ml-4">
              <NavLink
                to=".."
                className=" font-extrabold text-[1.35rem] lg:text-white"
              >
                NZXT
              </NavLink>
            </li>
            <li
              className=" hidden   lg:flex font-semibold items-center gap-1 cursor-pointer ml-4"
              onClick={gamingPcToggle}
            >
              <NavLink>Gaming PCs</NavLink>
              <BiChevronDown
                className={` text-lg ${
                  gamingToggle ? " rotate-180" : ""
                } transition-all`}
              />

              {gamingToggle && <GamingPCs />}
            </li>
            <li
              className=" hidden lg:flex font-semibold items-center gap-1 cursor-pointer"
              onClick={componentsPcToggle}
            >
              <NavLink>Components</NavLink>
              <BiChevronDown
                className={` text-lg ${
                  componentsToggle ? " rotate-180" : ""
                } transition-all`}
              />
              {componentsToggle && <ComponentsPc />}
            </li>
            <li
              className=" hidden lg:flex font-semibold items-center gap-1 cursor-pointer"
              onClick={monitorPcToggle}
            >
              <NavLink>Monitors</NavLink>
              <BiChevronDown
                className={` text-lg ${
                  monitorsToggle ? " rotate-180" : ""
                } transition-all`}
              />
              {monitorsToggle && <MonitorPc />}
            </li>
            <li
              className=" hidden lg:flex font-semibold items-center gap-1 cursor-pointer"
              onClick={peripheralsPcToggle}
            >
              <NavLink>Peripherals</NavLink>
              <BiChevronDown
                className={` text-lg ${
                  peripheralsToggle ? " rotate-180" : ""
                } transition-all`}
              />
              {peripheralsToggle && <PeripheralsPc />}
            </li>
            <li
              className=" hidden lg:flex font-semibold items-center gap-1 cursor-pointer"
              onClick={softwarePcToggle}
            >
              <NavLink>Software</NavLink>
              <BiChevronDown
                className={` text-lg ${
                  softwareToggle ? " rotate-180" : ""
                } transition-all`}
              />
              {softwareToggle && <SoftwarePc />}
            </li>
            <li
              className=" hidden lg:flex font-semibold items-center gap-1 cursor-pointer"
              onClick={communityPcToggle}
            >
              <NavLink>Community</NavLink>
              <BiChevronDown
                className={` text-lg ${
                  communityToggle ? " rotate-180" : ""
                } transition-all`}
              />
              {communityToggle && <CommunityPc />}
            </li>
            <li className=" ml-auto relative">
              <NavLink
                to="cart"
                className="text-[#7315e5] text-[25px] cursor-pointer lg:text-white relative"
              >
                <BsCart2 />
              </NavLink>
              <div className=" absolute flex items-center justify-center w-4 h-4 p-1 bg-[#7315e5] rounded-full -top-[4px] -right-[5px] z-30 lg:bg-white">
                <p className=" text-xs font-bold lg:text-black">1</p>
              </div>
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
