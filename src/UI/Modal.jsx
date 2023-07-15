import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replaceParts } from "../store/storeSlice";
import BackdropUI from "./Backdrop";
import Img from "./Img";

const Components = ({ component }) => {
  const [componentName, quantity] = component;

  return (
    <div className=" w-full h-[3.7rem] border-b border-t border-white flex items-center justify-between ">
      <h1 className=" text-white/70 font-semibold">{componentName}</h1>
      <h1 className=" text-white">{quantity}</h1>
    </div>
  );
};

const Backdrop = ({
  closeBackDrop,
  information = {},
  partsName,
  imagesData,
  nameData,
  price,
}) => {
  const [quantityData, setQuantityData] = useState(1);
  const dispatch = useDispatch();
  const { images, description, title, list, capacity } = information;
  const itemSelector = useSelector((state) => state.myStore);

  const dataItem = itemSelector[0]?.ram?.capacity;
  const [changeRam, setChangeRam] = useState(dataItem);

  const ram = partsName !== "ram";
  const id = 1;

  const ramCapacity = capacity?.map((item) => {
    if (item.ramSpeed.includes(changeRam)) {
      return { ...item, checkState: true };
    } else {
      return { ...item, checkState: false };
    }
  });

  const newPrice = dataItem === "16GB (2 x 8GB)" ? price * 2 : price * 1;

  const itemReplaceHandler = () => {
    dispatch(
      replaceParts({
        id,
        images: imagesData,
        name: nameData,
        partsName,
        quantity: quantityData,
        price: newPrice,
        capacity: changeRam,
      })
    );
    closeBackDrop();
  };

  return (
    <BackdropUI>
      <div className=" z-50 bg-[#1A1C1E] h-screen w-screen flex flex-col  p-8 lg:w-[35rem] lg:h-auto rounded-md overflow-y-auto scrollBarHide">
        <div className=" w-full h-auto flex items-center">
          <h1
            className=" ml-auto cursor-pointer text-white text-2xl"
            onClick={closeBackDrop}
          >
            <AiOutlineClose />
          </h1>
        </div>
        <div className=" h-[15rem] lg:h-[10rem]">
          <Img src={images} className=" w-full h-full object-contain" />
        </div>
        <h1 className=" text-white m-8 text-2xl font-semibold text-center">
          {title}
        </h1>
        {ram && (
          <p className=" text-center text-white font-semibold text-[17px] mb-4">
            {description}
          </p>
        )}
        {!ram && (
          <div className=" flex flex-col w-full gap-2">
            <h1 className=" text-white font-semibold">
              Capacity: <span className=" font-normal">{changeRam}</span>
            </h1>
            <div className=" w-full flex items-center justify-between text-white font-semibold">
              {ramCapacity?.map((item) => (
                <button
                  key={item.id}
                  className={` ${
                    item.checkState ? "bg-[#8C35FD]" : ""
                  } rounded-md py-1 px-4 border border-[#8C35FD]`}
                  onClick={() => {
                    setChangeRam(item?.ramSpeed);
                  }}
                >
                  {item.ramSpeed}
                </button>
              ))}
            </div>
            <div className=" mt-4 flex">
              <div className="w-[4rem] h-[2.25rem] px-1 bg-[#59595F] flex items-center justify-center text-white rounded-bl-md rounded-tl-md">
                QTY
              </div>
              <select
                name=""
                id=""
                value={quantityData}
                className=" bg-[#313235] w-[4rem] h-[2.25rem] rounded-br-md rounded-tr-md px-1 text-white"
                onChange={(e) => setQuantityData(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <button
              className=" bg-[#7315E5] py-2 rounded-md text-white font-semibold"
              onClick={itemReplaceHandler}
            >
              ADD
            </button>
            <button
              className="py-2 rounded-md text-white font-semibold"
              onClick={closeBackDrop}
            >
              CANCEL
            </button>
          </div>
        )}
        <div className=" flex flex-col mt-4">
          {list.map((item) => (
            <Components key={item.id} component={item.component} />
          ))}
        </div>
      </div>
    </BackdropUI>
  );
};

const Modal = ({
  closeBackDrop,
  information,
  partsName,
  imagesData,
  nameData,
  price,
}) => {
  return (
    <>
      {createPortal(
        <Backdrop
          imagesData={imagesData}
          nameData={nameData}
          closeBackDrop={closeBackDrop}
          information={information}
          partsName={partsName}
          price={price}
        />,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default Modal;
