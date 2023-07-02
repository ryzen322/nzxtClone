import HeadingH1 from "../../UI/HeadingH1";
import { Link } from "react-router-dom";

const ChipSet = () => {
  return (
    <div className=" flex flex-col w-full gap-4">
      <HeadingH1>Chipset</HeadingH1>

      <div className=" bg-[#222426] rounded-md flex justify-center items-center h-[7rem] flex-col gap-2">
        <div className=" flex bg-black rounded-md p-1 gap-2">
          <Link className=" text-white bg-[#313235] px-6 rounded-md">AMD</Link>
          <Link className=" text-white  px-6 rounded-md">intel</Link>
        </div>
        <h1 className=" text-white">Help me decide</h1>
      </div>
    </div>
  );
};

export default ChipSet;
