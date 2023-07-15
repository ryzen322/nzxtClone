const Loading = () => {
  const array1 = [1, 2, 3, 4, 5];

  return (
    <>
      {array1.map((item, index) => (
        <div
          key={index}
          className=" flex flex-col w-full h-[10rem] bg-[#111827] rounded-md p-4 gap-3 animate-pulse z-[1]"
        >
          <div className=" flex items-center gap-4">
            <div className=" w-[4.75rem] h-[5rem] bg-stone-500 rounded-md flex flex-col items-center justify-center shrink-0"></div>
            <div className=" flex flex-col gap-2">
              <div className=" w-[4rem] h-[7px] bg-stone-500 rounded-lg"></div>
              <div className=" w-[6rem] h-[7px] bg-stone-500 rounded-lg"></div>
              <div className=" w-[8rem] h-[7px] bg-stone-500 rounded-lg"></div>
              <div className=" w-[10rem] h-[7px] bg-stone-500 rounded-lg"></div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-3 gap-2">
            <div className=" h-[9px] bg-stone-500 rounded-lg col-span-2"></div>
            <div className=" h-[9px] bg-stone-500 rounded-lg"></div>
            <div className=" h-[9px] bg-stone-500 rounded-lg"></div>
            <div className=" h-[9px] bg-stone-500 rounded-lg col-span-2"></div>
            <div className=" h-[9px] bg-stone-500 rounded-lg"></div>
            <div className=" h-[9px] bg-stone-500 rounded-lg"></div>
            <div className=" h-[9px] bg-stone-500 rounded-lg"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;
