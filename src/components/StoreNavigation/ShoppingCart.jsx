import { useSelector } from "react-redux";
import ChipSet from "./ChipSet";

import Items from "./items/Items";

const ShoppingCart = ({
  caseRef,
  cpuRef,
  gpuRef,
  motherboardRef,
  ramRef,
  storageRef,
  coolingRef,
  powersupplyRef,
}) => {
  const pcParts = useSelector((state) => state.myStore);

  const referrences = [
    caseRef,
    cpuRef,
    gpuRef,
    motherboardRef,
    ramRef,
    storageRef,
    coolingRef,
    powersupplyRef,
  ];

  const itemValue = [];

  for (const items of Object.keys(pcParts[0])) {
    itemValue.push(items);
  }

  const itemValuesData = [...itemValue.slice(1, 9)];

  const pcPartsArray = [];
  const pcPartsFinalyArray = [];

  for (const item of pcParts) {
    pcPartsArray.push(item.case);
    pcPartsArray.push(item.cpu);
    pcPartsArray.push(item.gpu);
    pcPartsArray.push(item.motherboard);
    pcPartsArray.push(item.ram);
    pcPartsArray.push(item.storage);
    pcPartsArray.push(item.cooling);
    pcPartsArray.push(item.powersupply);
  }

  for (const item of pcPartsArray) {
    const pcParts = item.pcParts;
    const partsName = item.partsName;
    const images = item.images;
    const id = item.pcParts;
    const activeState = item.toggle;
    const itemArray = item.itemArray;

    pcPartsFinalyArray.push({
      id,
      pcParts,
      partsName,
      images,
      activeState,
      itemArray,
    });
  }
  const mergeArray = pcPartsFinalyArray.map((item, index) => {
    return {
      ...item,
      itemPartsName: itemValuesData[index],
      referrences: referrences[index],
    };
  });

  return (
    <div className=" flex flex-col w-full bg-black ">
      <div className=" w-full h-[3rem] bg-[#313235] fixed flex left-0"></div>
      <section className=" w-full flex flex-col mt-[3rem] p-4 gap-[2.5rem]">
        <ChipSet />

        {mergeArray.map((data) => (
          <Items
            key={data.id}
            id={data.id}
            itemArray={data.itemArray}
            referrences={data.referrences}
            partsName={data.partsName}
            itemPartsName={data.itemPartsName}
          />
        ))}
      </section>
    </div>
  );
};

export default ShoppingCart;
