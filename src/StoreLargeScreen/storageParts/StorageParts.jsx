import { useState } from "react";
import StorageCost from "./StorageCost";
import StoragePartsList from "./StoragePartsList";
import StoreLargeSummary from "../StoreLargeSummary";

const StorageParts = ({ dataArray, itemValuesData }) => {
  const [base, setBase] = useState(true);

  const baseHandler = () => {
    setBase((state) => !state);
  };

  return (
    <div className=" w-full h-[52.5vh] bg-black relative 2xl:h-full">
      <header className=" text-white w-full bg-[#313235] h-[3.25rem] 2xl:mt-[3.25rem]">
        <ul className=" flex  w-[23rem] gap-1 h-full">
          <li
            className={`  h-full flex justify-center items-center px-5 font-semibold text-base text-gray-300/75 cursor-pointer border-b-[4px]  ${
              base ? `border-fuchsia-500` : " border-[#313235]"
            }`}
            onClick={baseHandler}
          >
            01 Base
          </li>
          <li
            className={`  h-full flex justify-center items-center px-5 font-semibold text-base text-gray-300/75 cursor-pointer border-b-[4px]  ${
              !base ? `border-fuchsia-500` : " border-[#313235]"
            }`}
            onClick={baseHandler}
          >
            02 Summary
          </li>
        </ul>
      </header>
      {base && (
        <StoragePartsList
          dataArray={dataArray}
          itemValuesData={itemValuesData}
        />
      )}
      {!base && <StoreLargeSummary dataArray={dataArray} />}
      <StorageCost priceItem={dataArray} />
    </div>
  );
};

export default StorageParts;
