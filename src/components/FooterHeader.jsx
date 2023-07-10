const FooterHeader = () => {
  return (
    <section className=" container mx-auto flex flex-col text-white space-y-4 md:px-[8rem] md:space-y-8 lg:px-[3rem] lg:flex-row lg:gap-[2rem] 2xl:justify-between 2xl:px-[7rem]">
      <div className=" flex flex-col space-y-2">
        <h1 className=" text-3xl font-bold md:text-5xl">Stay In Touch</h1>
        <p className=" font-semibold text-[17.5px] md:text-[21px] md:max-w-[29rem] md:leading-7">
          Keep up to date on the latest releases, offers, and news from NZXT
        </p>
      </div>
      <div className=" grid gap-4 md:grid-cols-3 md:gap-2">
        <input
          className=" px-2 py-2 outline rounded-md outline-offset-1 focus:outline-[#7315e5] text-black md:col-span-2"
          type="text"
        />
        <button
          className=" bg-[#CDCDD5] rounded-md px-2 py-2 font-semibold text-[17px] text-gray-700/70"
          disabled={true}
        >
          Notify Me
        </button>
        <div className=" flex items-center px-3 gap-3 text-white md:col-span-full">
          <input type="checkbox" className=" h-4 w-4 appearance-non " />
          <p className=" text-xs font-semibold">
            {`By signing up you agree to NZXT, CAM, and BLD'S`}
            <span className=" text-blue-600"> Privacy Policy</span> and
            <span className=" text-blue-600"> Terms & conditions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterHeader;
