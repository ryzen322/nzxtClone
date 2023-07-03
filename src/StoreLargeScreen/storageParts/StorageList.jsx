import { useDispatch, useSelector } from "react-redux";
import { replaceItems } from "../../store/storeSlice";

const StorageList = ({ partsName, images, name, size, toggleStateHanlder }) => {
  const list = useSelector((state) => state.myStore);
  const dispatch = useDispatch();

  const idData = 1;

  const parts = list[0][partsName].pcParts;

  const replaceItemData = () => {
    dispatch(replaceItems({ name, idData, images, partsName }));
    toggleStateHanlder();
  };

  return (
    <div
      className={`bg-[#313235] rounded-md p-2 border-2  h-[18rem] ${
        parts === name ? "border-[#7315E5]" : "border-[#313235]"
      }  flex flex-col`}
    >
      <div className=" flex items-center gap-4">
        <div className=" flex justify-center items-center bg-white w-[5.25rem] h-[5.5rem] rounded-md px-1 shrink-0">
          <img className=" w-full h-full object-contain" src={images} alt="" />
        </div>
        <div className=" flex flex-col leading-5">
          <p className=" font-semibold">{name}</p>
          <p className=" text-xs font-semibold">{size}</p>
        </div>
      </div>
      <div className=" mt-[2rem]">
        <h1>Color: white</h1>
        <div className=" flex items-center gap-2">
          <div className=" w-[2.3rem] h-[2.3rem] bg-white rounded-full border-[3px] border-black cursor-pointer" />
          <div className=" w-[2.3rem] h-[2.3rem] bg-black rounded-full  border-[3px] border-white cursor-pointer" />
        </div>
      </div>
      <div className=" mt-auto mb-1 flex justify-between items-center">
        <button className=" px-5 py-1 border border-[#bd9eff] rounded-md text-[#bd9eff] text-sm font-bold">
          INFO
        </button>
        <button
          className={` px-5 py-1 ${
            parts === name ? "" : "border"
          } border-[#bd9eff] rounded-md  text-white text-sm font-bold ${
            parts === name ? "bg-[#8C35FD]" : ""
          } uppercase`}
          onClick={replaceItemData}
        >
          {parts === name ? "added" : "replace"}
        </button>
      </div>
    </div>
  );
};

export default StorageList;
