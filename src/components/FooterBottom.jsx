import FooterIcons from "./FooterIcons";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="container mx-auto flex flex-col items-center mt-4 lg:items-start lg:mt-16">
      <div className="block md:hidden">
        <FooterIcons />
      </div>
      <div className="  flex flex-col items-center mt-4 lg:items-start lg:flex-col">
        <h1 className=" text-white text-sm font-bold ">NZXT</h1>
        <ul className=" flex flex-col items-center leading-4 lg:flex-row lg:gap-8">
          <li className="text-[13px] text-[#91919cff]  lg:text-[15px] ">
            <Link>© NZXT Inc. 2023 All Rights Reserved</Link>
          </li>
          <li className="text-[13px] text-[#91919cff]  lg:text-[15px]">
            <Link>Legal </Link>
          </li>
          <li className="text-[13px] text-[#91919cff]  lg:text-[15px]">
            <Link>Privacy Policy</Link>
          </li>
          <li className="text-[13px] text-[#91919cff]  lg:text-[15px]">
            <Link>Manage Cookie Preferences</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom;
