/* eslint-disable react/prop-types */
import StorageList from "./StorageList";

const StorageListData = ({ keys, itemArray, activeState }) => {
  const displayData = activeState;

  return (
    <>
      {displayData && (
        <div className=" w-full flex flex-col gap-5">
          <div className=" flex justify-between items-center"></div>
          <div className=" grid grid-cols-3 gap-2">
            {itemArray.map((item) => (
              <StorageList
                key={item.id}
                partsName={keys}
                images={item.images}
                name={item.name}
                size={item.size}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default StorageListData;
