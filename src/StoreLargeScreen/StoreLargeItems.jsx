import Img from "../UI/Img";
import StoreLargeItemList from "./StoreLargeItemList";

const StoreLargeItems = ({ pcPartsArray = [], itemValuesData }) => {
  return (
    <div className=" w-full h-[18rem]  grid grid-rows-5 grid-cols-2 gap-2 2xl:h-[25rem]">
      <div
        className={` bg-[#222426] col-span-2 rounded-md border border-[#222426] hover:border-white cursor-pointer flex items-center gap-2 p-1`}
      >
        <div className=" h-full w-[2.35rem] rounded-md flex items-center justify-center px-1 2xl:w-[4rem]">
          <Img
            src={"https://nzxt.com/icons/svg/chipset.svg"}
            className=" w-full h-full object-contain"
          />
        </div>
        <div className=" flex flex-col leading-5 text-white">
          <h1 className=" font-semibold">Chipset</h1>
          <p className=" text-xs font-semibold">AMD</p>
        </div>
      </div>
      {pcPartsArray.map((item) => (
        <StoreLargeItemList
          key={item.id}
          id={item.id}
          itemPartsName={item.itemPartsName}
          images={item.images}
          parts={item.partsName}
          brand={item.pcParts}
          activeState={item.activeState}
          itemValuesData={itemValuesData}
        />
      ))}
    </div>
  );
};

export default StoreLargeItems;
