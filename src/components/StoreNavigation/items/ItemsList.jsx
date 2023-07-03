import { useDispatch, useSelector } from "react-redux";
import { replaceParts } from "../../../store/storeSlice";
import Backdrop from "../../../UI/Backdrop";
import { useState } from "react";
import Modal from "../../../UI/Modal";

const ItemsList = ({ images, size, name, partsName, information }) => {
  const [removeBackdrop, setRemoveBackdrop] = useState(false);
  const pcPartsName = useSelector((state) => state.myStore);
  const dispatch = useDispatch();
  const id = 1;

  const names = pcPartsName[0][partsName].pcParts === name;

  const motherboard = partsName === "motherboard";
  const gpu = partsName === "gpu";
  const cpu = partsName === "cpu";
  const ram = partsName === "ram";
  const storage = partsName === "storage";

  const itemReplaceHandler = () => {
    dispatch(replaceParts({ id, images, name, partsName }));
  };

  const backdrop = () => {
    setRemoveBackdrop((state) => !state);
  };

  return (
    <>
      <div
        className={` w-full h-[15rem] bg-[#313235] rounded-md p-2 flex flex-col gap-2 border-2  ${
          names ? "border-[#7315E5]" : "border-[#313235]"
        }`}
      >
        <div className=" flex items-center gap-3">
          <div className=" w-[4.75rem] h-[5rem] bg-white rounded-md flex flex-col items-center justify-center shrink-0">
            <img className=" w-[4.5rem]" src={images} alt="" />
          </div>
          <div className=" flex flex-col text-white">
            <h1 className=" text-lg font-semibold">{name}</h1>
            <p className=" text-xs font-medium">{size}</p>
          </div>
        </div>
        <h1 className=" text-white">
          <span className=" font-bold">Color:</span> White
        </h1>
        {!motherboard && !gpu && !cpu && !ram && !storage && (
          <div className=" flex items-center gap-2">
            <div className=" w-[2.3rem] h-[2.3rem] bg-white rounded-full border-[3px] border-black cursor-pointer" />
            <div className=" w-[2.3rem] h-[2.3rem] bg-black rounded-full  border-[3px] border-white cursor-pointer" />
          </div>
        )}
        <div className=" mt-auto mb-1 flex justify-between items-center">
          <button
            className=" px-5 py-1 border border-[#bd9eff] rounded-md text-[#bd9eff] text-sm font-bold"
            onClick={backdrop}
          >
            INFO
          </button>
          <button
            className={` px-5 py-1 ${
              names ? "" : "border"
            } border-[#bd9eff] rounded-md  text-white text-sm font-bold ${
              names ? "bg-[#8C35FD]" : ""
            } uppercase`}
            onClick={itemReplaceHandler}
          >
            {names ? "added" : "replace"}
          </button>
        </div>
      </div>
      {removeBackdrop && (
        <Modal closeBackDrop={backdrop} information={information} />
      )}
    </>
  );
};

export default ItemsList;
