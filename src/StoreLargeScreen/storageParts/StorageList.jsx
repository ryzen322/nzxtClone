import { useDispatch, useSelector } from "react-redux";
import { replaceParts } from "../../store/storeSlice";
import { useState } from "react";
import Modal from "../../UI/Modal";
import Img from "../../UI/Img";

const StorageList = ({ partsName, images, name, size, information, price }) => {
  const { store: list } = useSelector((state) => state.myStore);

  const [removeBackdrop, setRemoveBackdrop] = useState(false);
  const dispatch = useDispatch();

  const idData = 1;
  const quantity = 1;

  const parts = list[0][partsName].pcParts;

  const itemPrice = list[0][partsName].total;

  const names = parts === name;

  const logicForThePrice =
    itemPrice > price ? `-${itemPrice - price}` : `+${price - itemPrice}`;

  const removeTheFirstLetter = logicForThePrice.slice(1);
  const getFirstLetter = logicForThePrice.charAt(0);

  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const price2 = getFirstLetter + currency.format(removeTheFirstLetter);

  const finalString = price2.includes("+$0") ? (
    <div className=" text-white ml-auto  mt-6">
      <h1 className=" opacity-0">arteezy</h1>
    </div>
  ) : (
    <div className=" text-white ml-auto  mt-6">
      <h1>{price2}</h1>
    </div>
  );

  const replaceItemData = () => {
    dispatch(
      replaceParts({ id: idData, images, name, partsName, quantity, price })
    );
  };

  const backdrop = () => {
    setRemoveBackdrop((state) => !state);
  };

  const motherboard = partsName === "motherboard";
  const gpu = partsName === "gpu";
  const cpu = partsName === "cpu";
  const ram = partsName === "ram";
  const storage = partsName === "storage";
  const psu = partsName === "psu";

  return (
    <>
      <div
        className={`bg-[#313235] rounded-md p-2 border-2  h-auto ${
          parts === name ? "border-[#7315E5]" : "border-[#313235]"
        }  flex flex-col`}
      >
        <div className=" flex items-center gap-4">
          <div className=" flex justify-center items-center bg-white w-[5.25rem] h-[5.5rem] rounded-md px-1 shrink-0">
            <Img src={images} className=" w-full h-full object-contain" />
          </div>
          <div className=" flex flex-col leading-5">
            <p className=" font-semibold">{name}</p>
            <p className=" text-xs font-semibold">{size}</p>
          </div>
        </div>
        {!gpu && !motherboard && !cpu && !ram && !storage && !psu && (
          <div className=" mt-[2rem]">
            <h1>Color: white</h1>
            <div className=" flex items-center gap-2">
              <div className=" w-[2.3rem] h-[2.3rem] bg-white rounded-full border-[3px] border-black cursor-pointer" />
              <div className=" w-[2.3rem] h-[2.3rem] bg-black rounded-full  border-[3px] border-white cursor-pointer" />
            </div>
          </div>
        )}
        {parts === name ? (
          <div className=" text-white ml-auto">
            <h1 className=" opacity-0">arteezy</h1>
          </div>
        ) : (
          finalString
        )}
        {!ram && (
          <div className=" mt-auto mb-1 flex justify-between items-center">
            {
              <button
                className=" px-5 py-1 border border-[#bd9eff] rounded-md text-[#bd9eff] text-sm font-bold"
                onClick={backdrop}
              >
                INFO
              </button>
            }
            <button
              className={` px-5 py-1 ${
                names ? "" : "border"
              } border-[#bd9eff] rounded-md  text-white text-sm font-bold ${
                names ? "bg-[#8C35FD]" : ""
              } uppercase`}
              onClick={replaceItemData}
            >
              {names ? "added" : "replace"}
            </button>
          </div>
        )}
        {ram && (
          <div className=" mt-auto mb-1 flex justify-between items-center ">
            {names ? (
              <button
                className={` px-5 py-1 ml-auto ${
                  names ? "" : "border"
                } border-[#bd9eff] rounded-md  text-white text-sm font-bold ${
                  names ? "bg-[#8C35FD]" : ""
                } uppercase`}
                onClick={backdrop}
              >
                edit
              </button>
            ) : (
              <button
                className={` px-5 py-1 ml-auto ${
                  names ? "" : "border"
                } border-[#bd9eff] rounded-md  text-[#bd9eff] text-sm font-bold ${
                  names ? "bg-[#8C35FD]" : ""
                } uppercase `}
                onClick={backdrop}
              >
                OPTION & INFO
              </button>
            )}
          </div>
        )}
      </div>
      {removeBackdrop && (
        <Modal
          closeBackDrop={backdrop}
          information={information}
          partsName={partsName}
          imagesData={images}
          nameData={name}
          price={price}
        />
      )}
    </>
  );
};

export default StorageList;
