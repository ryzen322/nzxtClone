import { useDispatch, useSelector } from "react-redux";
import { replaceParts } from "../../../store/storeSlice";
import { useState } from "react";
import Modal from "../../../UI/Modal";
import Img from "../../../UI/Img";

const ItemsList = ({
  images,
  size,
  name,
  partsName,
  information = {},
  price,
}) => {
  const [removeBackdrop, setRemoveBackdrop] = useState(false);
  const { store: pcPartsName } = useSelector((state) => state.myStore);

  const dispatch = useDispatch();
  const id = 1;

  const capacity = pcPartsName[0][partsName].capacity;

  const names = pcPartsName[0][partsName].pcParts === name;

  const itemPrice = pcPartsName[0][partsName].total;

  const logicForThePrice =
    itemPrice > price ? `-${itemPrice - price}` : `+${price - itemPrice}`;

  const motherboard = partsName === "motherboard";
  const gpu = partsName === "gpu";
  const cpu = partsName === "cpu";
  const ram = partsName === "ram";
  const storage = partsName === "storage";
  const psu = partsName === "psu";

  const quantity = 1;

  const itemReplaceHandler = () => {
    dispatch(replaceParts({ id, images, name, partsName, quantity, price }));
  };

  const backdrop = () => {
    setRemoveBackdrop((state) => !state);
  };

  const removeTheFirstLetter = logicForThePrice.slice(1);
  const getFirstLetter = logicForThePrice.charAt(0);

  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const price2 = getFirstLetter + currency.format(removeTheFirstLetter);

  const finalString = price2.includes("+$0") ? (
    <div className=" text-white ml-auto">
      <h1 className=" opacity-0">arteezy</h1>
    </div>
  ) : (
    <div className=" text-white ml-auto">
      <h1>{price2}</h1>
    </div>
  );

  return (
    <>
      <div
        className={` w-full  h-auto bg-[#313235] rounded-md p-2 flex flex-col gap-2 border-2  ${
          names ? "border-[#7315E5]" : "border-[#313235]"
        }`}
      >
        <div className=" flex items-center gap-3">
          <div className=" w-[4.75rem] h-[5rem] bg-white rounded-md flex flex-col items-center justify-center shrink-0">
            <Img className=" w-[4.5rem]" src={images} alt="" />
          </div>
          <div className=" flex flex-col text-white">
            <h1 className=" text-lg font-semibold">{name}</h1>
            <p className=" text-xs font-medium">{size}</p>
          </div>
        </div>

        {ram && (
          <h1 className=" text-white font-semibold">
            Capacity:
            <span className=" font-normal">
              {names ? `    ${capacity}` : "   2 Options"}
            </span>
          </h1>
        )}
        {!gpu && !cpu && !ram && !storage && psu && (
          <h1 className=" text-white">
            <span className=" font-bold">Color:</span> White
          </h1>
        )}
        {!motherboard && !gpu && !cpu && !ram && !storage && psu && (
          <div className=" flex items-center gap-2">
            <div className=" w-[2.3rem] h-[2.3rem] bg-white rounded-full border-[3px] border-black cursor-pointer" />
            <div className=" w-[2.3rem] h-[2.3rem] bg-black rounded-full  border-[3px] border-white cursor-pointer" />
          </div>
        )}
        {names ? (
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
              onClick={itemReplaceHandler}
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

export default ItemsList;
