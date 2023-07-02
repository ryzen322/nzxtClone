import StorageCost from "./StorageCost";
import StoragePartsList from "./StoragePartsList";

const StorageParts = ({ dataArray, itemValuesData }) => {
  return (
    <div className=" w-full h-[52.5vh] bg-black relative">
      <header className=" text-white w-full bg-[#313235] h-[3.25rem]">
        <ul className=" flex  w-[23rem] gap-1 h-full">
          <li className="  h-full flex justify-center items-center px-5 font-semibold text-base text-gray-300/75 cursor-pointer border-b-[4px] border-fuchsia-500">
            01 Base
          </li>
          <li className="  h-full flex justify-center items-center px-5 font-semibold text-base text-gray-300/75 cursor-pointer border-b-[4px] border-fuchsia-500">
            02 Add-ons
          </li>
          <li className="  h-full flex justify-center items-center px-5 font-semibold text-base text-gray-300/75 cursor-pointer border-b-[4px] border-fuchsia-500">
            03 Summary
          </li>
        </ul>
      </header>
      <StoragePartsList dataArray={dataArray} itemValuesData={itemValuesData} />
      <StorageCost />
    </div>
  );
};

export default StorageParts;
