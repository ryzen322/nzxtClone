import { VscTrash } from "react-icons/vsc";
import { useSelector } from "react-redux";
import ItemListCart from "./ItemListCart";
import { useNavigate } from "react-router-dom";

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

  console.log(pcPartsArray);

  return (
    <>
      <div className=" mt-4 w-full flex">
        <div className=" w-[5rem] h-[5rem] flex items-center justify-center">
          <img
            className=" w-full h-full object-contain"
            src={`https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1986%2F9305%2Ffiles%2FrzjMYx.png%3Fv%3D1685632071&w=256&q=75`}
            alt=""
          />
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
            <h1 className=" text-stone-500 text-base">$1,366.91</h1>
          </div>
        </div>
      </div>
      <div className=" flex flex-col pl-2 ">
        <header className=" text-[12px] font-semibold">Service</header>
        <p className=" text-[0.70rem] pl-2">Standard Service (US) ASSEMBLY</p>
      </div>
      <div className=" flex flex-col pl-2 ">
        <header className=" text-[12px] font-semibold">Software</header>
        <p className=" text-[0.70rem] pl-2">Windows 11 Home</p>
      </div>
      {pcPartsArray?.map((state) => (
        <ItemListCart
          key={state.id}
          partsName={state.partsName}
          pcParts={state.pcParts}
        />
      ))}
    </>
  );
};

export default CartList;
