import StorageListData from "./StorageListData";
import StorageChipset from "./StorageChipset";

const StoragePartsList = ({ dataArray = [], itemValuesData }) => {
  const mergeArray = dataArray.map((data, index) => {
    return { ...data, keys: itemValuesData[index] };
  });

  return (
    <div className="scrollBarHide text-white w-full h-[28.2rem] p-4  overflow-auto 2xl:h-[50rem]">
      <StorageChipset />
      {mergeArray.map((data) => (
        <StorageListData
          key={data.id}
          keys={data.keys}
          activeState={data.activeState}
          itemPartsName={data.itemPartsName}
        />
      ))}
    </div>
  );
};

export default StoragePartsList;
