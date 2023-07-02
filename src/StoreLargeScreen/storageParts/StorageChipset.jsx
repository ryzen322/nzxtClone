const StorageChipset = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex justify-between items-center">
        <h1 className=" text-lg font-medium text-white/90">Chipset</h1>
        <h1 className=" text-lg font-medium text-white/90">Case</h1>
      </div>
      <div className=" w-full h-[9.5rem] bg-[#222426] rounded-md flex justify-center items-center flex-col gap-2">
        <div className=" flex gap-2 items-center bg-black p-1 rounded-md">
          <h1 className=" flex items-center justify-center px-4 py-[0.15rem] bg-[#313235]  hover:bg-[#313235]/80 rounded-lg cursor-pointer text-stone-50 font-medium">
            AMD
          </h1>
          <h1 className=" flex items-center justify-center px-4 py-[0.15rem] rounded-lg cursor-pointer text-stone-50/40 font-medium hover:bg-[#313235]">
            intel
          </h1>
        </div>
        <h1 className="">Help me decide</h1>
      </div>
    </div>
  );
};

export default StorageChipset;
