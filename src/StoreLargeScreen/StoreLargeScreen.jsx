/* eslint-disable react/prop-types */
import { shoppingCart } from "../store/storeSlice";
import StoreLargeBuildItem from "./StoreLargeBuildItem";
import StorageParts from "./storageParts/StorageParts";
import { useSelector } from "react-redux";

const StoreLargeScreen = () => {
  const { store: pcParts } = useSelector(shoppingCart);

  const itemValue = [];

  for (const items of Object.keys(pcParts[0])) {
    itemValue.push(items);
  }

  const itemValuesData = [...itemValue].filter(
    (state) => !state.includes("id")
  );

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
    const price = item.total;
    const quantity = item.quantity;
    pcPartsFinalyArray.push({
      id,
      pcParts,
      partsName,
      images,
      activeState,
      price,
      quantity,
    });
  }

  const mergeArray = pcPartsFinalyArray.map((item, index) => {
    return { ...item, itemPartsName: itemValuesData[index] };
  });

  return (
    <section className="hidden lg:flex flex-col h-screen w-full bg-[#1A1C1E] 2xl:flex-row">
      <StoreLargeBuildItem
        pcPartsArray={mergeArray}
        itemValuesData={itemValuesData}
      />
      <StorageParts dataArray={mergeArray} itemValuesData={itemValuesData} />
    </section>
  );
};

export default StoreLargeScreen;
