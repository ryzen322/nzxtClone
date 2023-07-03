import { BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleState } from "../store/storeSlice";
import { toggleStateChipset } from "../store/chipsetSlice";

const StoreLargeItemList = ({
  images,
  brand,
  parts,
  activeState,
  id,
  itemPartsName,
  itemValuesData,
}) => {
  const getID = 1;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleState({ id: getID, itemPartsName, items: itemValuesData }));
    dispatch(toggleStateChipset(false));
  };

  return (
    <div
      className={` bg-[#222426] rounded-md border border-[#222426] hover:border-white cursor-pointer p-1 flex items-center gap-2 relative group ${
        activeState ? "bg-[#cccc]/40 border-white" : ""
      }`}
      onClick={handleClick}
    >
      <div className=" h-full w-[2.5rem] rounded-md flex items-center justify-center bg-white shrink-0 px-1 2xl:w-[4rem]">
        <img className=" h-full w-full object-contain" src={images} alt="" />
      </div>
      <div className=" flex flex-col leading-5 text-white">
        <h1 className=" font-semibold">{parts}</h1>
        <p className=" text-xs font-semibold">{brand}</p>
      </div>
      <BiEdit
        className={` text-white text-lg absolute top-1 right-1 ${
          activeState ? "block" : "hidden"
        } group-hover:block`}
      />
    </div>
  );
};

export default StoreLargeItemList;
