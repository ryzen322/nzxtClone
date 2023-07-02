import { useDispatch, useSelector } from "react-redux";
import { replaceCase } from "../../store/storeSlice";

const CaseListItem = ({ images, size, name }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.myStore);
  const idData = 1;

  const parts = list[0].case.pcParts;

  console.log(list);

  const replaceItem = () => {
    dispatch(replaceCase({ name, id: idData, images }));
  };

  return (
    <div
      className={` w-full h-[17rem] bg-[#313235] rounded-md p-2 flex flex-col gap-2 border-2  ${
        parts === name ? "border-[#7315E5]" : "border-[#313235]"
      } `}
    >
      <div className=" flex items-center gap-3">
        <div className=" w-[4.75rem] h-[5rem] bg-white rounded-md flex flex-col items-center justify-center">
          <img className=" w-[4.5rem]" src={images} alt="" />
        </div>
        <div className=" flex flex-col text-white">
          <h1 className=" text-lg font-semibold">{name}</h1>
          <p className=" text-xs font-medium">{size}</p>
        </div>
      </div>
      <h1 className=" text-white">
        <span className=" font-bold">Color:</span> White
      </h1>
      <div className=" flex items-center gap-2">
        <div className=" w-[2.3rem] h-[2.3rem] bg-white rounded-full border-[3px] border-black cursor-pointer" />
        <div className=" w-[2.3rem] h-[2.3rem] bg-black rounded-full  border-[3px] border-white cursor-pointer" />
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
          onClick={replaceItem}
        >
          {parts === name ? "added" : "replace"}
        </button>
      </div>
    </div>
  );
};

export default CaseListItem;
