/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import StorageList from "./StorageList";
import Loading from "../../UI/Loading";

const StorageListData = ({ keys, activeState, itemPartsName }) => {
  const { pcParts, loading, reject, succes } = useSelector(
    ({ pcParts }) => pcParts
  );

  const item = pcParts[`${itemPartsName}`];

  return (
    <>
      {activeState && (
        <div className=" w-full flex flex-col gap-5">
          <div className=" flex justify-between items-center"></div>
          <div className=" grid grid-cols-3 gap-2 2xl:grid-cols-1">
            {loading ? (
              <Loading />
            ) : (
              item.map((item) => (
                <StorageList
                  key={item.id}
                  partsName={keys}
                  images={item.images}
                  name={item.name}
                  size={item.size}
                  information={item.information}
                  price={item.price}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StorageListData;
