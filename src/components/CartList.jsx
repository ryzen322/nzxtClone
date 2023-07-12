import { VscTrash } from "react-icons/vsc";
import { useSelector } from "react-redux";
import ItemListCart from "./ItemListCart";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Img from "../UI/Img";

const CartList = () => {
  const items = useSelector((state) => state.myStore);
  const navigate = useNavigate();

  const pcPartsArray = [];

  for (const item of items) {
    pcPartsArray.push(item.case);
    pcPartsArray.push(item.cpu);
    pcPartsArray.push(item.gpu);
    pcPartsArray.push(item.motherboard);
    pcPartsArray.push(item.ram);
    pcPartsArray.push(item.storage);
    pcPartsArray.push(item.cooling);
    pcPartsArray.push(item.powersupply);
  }

  const images = pcPartsArray[0].images;

  const totalItems = useMemo(() => {
    return pcPartsArray
      .map((state) => state.total)
      .reduce((cur, value) => cur + value, 0);
  }, [pcPartsArray]);

  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const totalCost = currency.format(totalItems);

  return (
    <>
      <div className=" mt-4 w-full flex">
        <div className=" w-[4.25rem] h-[4.25rem] flex items-center justify-center">
          <Img src={images} className={" w-full h-full object-contain"} />
        </div>
        <h1 className=" font-bold text-black/80">NZXT H5 Flow White Build</h1>
        <div className=" w-[5rem] h-[4.5rem] ml-auto flex items-center justify-center flex-col">
          <div className=" flex items-center mt-4">
            <h1
              className=" text-blue-700 px-2 border-r-2 border-black cursor-pointer"
              onClick={() => navigate("../build/pc")}
            >
              Edit
            </h1>

            <h1 className="  px-2">
              <VscTrash className=" text-[24px]" />
            </h1>
          </div>
          <div className=" mt-auto">
            <h1 className=" text-stone-500 text-[15px]">{totalCost}</h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col pl-2 mt-1">
        <header className=" text-[12px] font-semibold">Service</header>
        <p className=" text-[0.70rem] pl-2">Standard Service (US) ASSEMBLY</p>
      </div>
      <div className=" flex flex-col pl-2 mt-1">
        <header className=" text-[12px] font-semibold">Software</header>
        <p className=" text-[0.70rem] pl-2">Windows 11 Home</p>
      </div>
      {pcPartsArray?.map((state) => (
        <ItemListCart
          key={state.partsName}
          partsName={state.partsName}
          pcParts={state.pcParts}
        />
      ))}
    </>
  );
};

export default CartList;
