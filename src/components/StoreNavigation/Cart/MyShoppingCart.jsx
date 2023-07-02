/* eslint-disable react/prop-types */
import { IoCloseSharp } from "react-icons/io5";
import MyShoppingListItem from "./MyShoppingListItem";
import { MdSaveAlt } from "react-icons/md";
import { VscCloudDownload } from "react-icons/vsc";
import { TfiReload } from "react-icons/tfi";
import { FiShare } from "react-icons/fi";

const MyShoppingCart = ({
  state,
  toggleShoppingList,

  partsItemArray = [],
}) => {
  return (
    <div
      className={`text-white fixed bottom-0 left-0 w-full ${
        state ? "h-[39rem]" : "h-0"
      } bg-black rounded-t-md flex flex-col overflow-hidden transition-all `}
    >
      <div
        className="  w-full h-[3.5rem] relative"
        onClick={toggleShoppingList}
      >
        <IoCloseSharp
          size="1.75rem"
          className=" absolute right-3 top-3 cursor-pointer"
        />
      </div>
      <div className=" w-full  h-[33rem] max-h-[30rem]  bg-black overflow-y-scroll">
        <ul className=" flex flex-col px-3 gap-2">
          {partsItemArray.map((item) => (
            <MyShoppingListItem
              toggleShoppingList={toggleShoppingList}
              executeScroll={item.function}
              key={item.pcParts}
              images={item.images}
              name={item.pcParts}
              partsName={item.partsName}
            />
          ))}
        </ul>
      </div>
      <div className=" w-full h-[7.5rem] bg-[#1A1C1E] border-t border-white">
        <div className=" w-full h-[5rem] grid grid-cols-4 gap-1">
          <div className=" flex justify-center items-center flex-col">
            <MdSaveAlt
              color="#BB9CFD"
              size="1.6rem"
              className=" cursor-pointer"
            />
            <p className=" text-sm font-semibold">Save</p>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <VscCloudDownload
              color="#BB9CFD"
              size="1.6rem"
              className=" cursor-pointer"
            />
            <p className=" text-sm font-semibold">Load</p>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <TfiReload
              color="#BB9CFD"
              size="1.3rem"
              className=" cursor-pointer"
            />
            <p className=" text-sm font-semibold">Restart</p>
          </div>
          <div className=" flex justify-center items-center flex-col">
            <FiShare
              color="#BB9CFD"
              size="1.6rem"
              className=" cursor-pointer"
            />
            <p className=" text-sm font-semibold">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyShoppingCart;
