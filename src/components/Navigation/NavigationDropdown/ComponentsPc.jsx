import { createPortal } from "react-dom";
import BackdropUI from "../../../UI/Backdrop";
import ComponentListItems from "./ComponentListItems";
import componentsItemArray from "./componentsArray/componentsArray";

const ComponentsItemPc = ({ onclickfunction }) => {
  const preventPropogation = (event) => {
    event.stopPropagation();
  };

  return (
    <BackdropUI onclickfunction={onclickfunction}>
      <div
        className="hidden lg:flex w-[58rem] h-auto bg-[#313235] absolute top-[4.5rem] left-[10px] rounded-md px-4 py-6  items-center gap-8 2xl:left-[5rem]"
        onClick={preventPropogation}
      >
        <div className="w-[63%] grid grid-cols-3 gap-4">
          {componentsItemArray.map((item) => (
            <ComponentListItems
              key={item.id}
              partName={item.partName}
              partsArray={item.partsArray}
              Icon={item.Icon}
            />
          ))}
        </div>
        <div className="bg-[#1B1C1D] h-auto flex-1 rounded-md px-3 pt-4 flex items-center flex-col cursor-pointer group overflow-hidden">
          <div className=" w-full text-white flex flex-col items-center">
            <h1 className=" font-semibold text-[17px]">The H7 Series</h1>
            <p className=" font-medium text-[15px]">Imagine What's Possible</p>
          </div>
          <div className=" mt-[3.5rem]">
            <img
              className=" group-hover:scale-110 transition-all"
              src="https://nzxt.com/assets/cms/34299/1653470212-h7-nav-cta.png?auto=format&fit=clip&h=270&w=270"
              alt=""
            />
          </div>
        </div>
      </div>
    </BackdropUI>
  );
};

const ComponentsPc = ({ onclickfunction }) => {
  return (
    <>
      {createPortal(
        <ComponentsItemPc onclickfunction={onclickfunction} />,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default ComponentsPc;
