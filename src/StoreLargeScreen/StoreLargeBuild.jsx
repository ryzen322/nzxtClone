import { MdOutlineNavigateNext } from "react-icons/md";

const StoreLargeBuild = () => {
  return (
    <div className="  p-2 w-[20rem] h-full flex flex-col gap-3 relative shrink-0  2xl:justify-center 2xl:w-[35rem]">
      <div className=" flex flex-col gap-2 2xl:hidden">
        <h1 className=" text-white text-2xl font-semibold">H5 Flow Build</h1>
      </div>
      <div className=" w-full h-[18rem] flex justify-center items-center">
        <img
          className=" w-[16rem] 2xl:w-[30rem]"
          src={`https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FrzjMYx.png&w=640&q=75`}
          alt=""
        />
      </div>
      <div className=" w-full h-[3rem] bg-[#313235] absolute bottom-0 rounded-t-md flex items-center justify-between px-2 cursor-pointer">
        <h1 className=" text-white font-semibold text-lg">Performance</h1>
        <MdOutlineNavigateNext
          size="2rem"
          color="#cccc"
          className=" rotate-[270deg]"
        />
      </div>
    </div>
  );
};

export default StoreLargeBuild;
