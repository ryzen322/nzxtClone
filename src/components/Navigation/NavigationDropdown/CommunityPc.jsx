import { createPortal } from "react-dom";
import BackdropUI from "../../../UI/Backdrop";
import { MdSpeed } from "react-icons/md";
import Img from "../../../UI/Img";

const CommunityItemPc = () => {
  const preventPropogation = (event) => {
    event.stopPropagation();
  };
  return (
    <BackdropUI>
      <div
        className="hidden lg:flex w-[45rem] h-auto bg-[#313235] absolute top-[4.5rem] left-[17rem] rounded-md px-4 py-6  2xl:left-[43rem]"
        onClick={preventPropogation}
      >
        <div className=" w-[60%] grid grid-cols-2">
          <div className=" flex flex-col text-[#dadae1] gap-4">
            <h1 className=" font-bold flex items-center gap-2">
              <MdSpeed className=" text-lg" />
              NZXT COMMUNITY
            </h1>
            <div className=" px-2  cursor-pointer group">
              <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
                PodCast
              </h1>
            </div>
            <div className=" px-2  cursor-pointer group">
              <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
                NZXT Club & <br /> Discord
              </h1>
            </div>
            <div className=" px-2  cursor-pointer group">
              <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
                Newsroom & Blog
              </h1>
            </div>
            <div className=" px-2  cursor-pointer group">
              <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
                Partner Program
              </h1>
            </div>
          </div>
          <div className=" flex flex-col text-[#dadae1] gap-4">
            <h1 className=" font-bold flex items-center gap-2">
              <MdSpeed className=" text-lg" />
              COMPANY
            </h1>
            <div className=" px-2  cursor-pointer group">
              <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
                Company
              </h1>
            </div>
            <div className=" px-2  cursor-pointer group">
              <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
                Careers
              </h1>
            </div>
            <div className=" px-2  cursor-pointer group">
              <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
                Prodcut Updates
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex-1 h-[17rem] flex flex-col items-center pt-4 bg-[#1B1C1D] rounded-md cursor-pointer group text-white overflow-hidden">
          <div className="flex flex-col text-center">
            <h1 className=" font-semibold text-lg">NZXT Partner Program</h1>
            <p className=" font-normal text-base">We want to grow with you!</p>
          </div>
          <div className=" w-full flex-1 overflow-hidden mt-[3.16rem]">
            <Img
              className=" group-hover:scale-110 transition-all"
              src="https://nzxt.com/assets/cms/34299/1639696534-partner-program-nav-cta.png?auto=format&fit=clip&h=270&w=270"
              alt=""
            />
          </div>
        </div>
      </div>
    </BackdropUI>
  );
};

const CommunityPc = () => {
  return (
    <>
      <>
        {createPortal(<CommunityItemPc />, document.querySelector("#overlays"))}
      </>
    </>
  );
};

export default CommunityPc;
