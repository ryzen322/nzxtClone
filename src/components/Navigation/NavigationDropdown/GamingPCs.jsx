import { createPortal } from "react-dom";
import BackdropUI from "../../../UI/Backdrop";
import { PiComputerTower } from "react-icons/pi";
import { MdNavigateNext } from "react-icons/md";
import { HiDesktopComputer } from "react-icons/hi";
import Img from "../../../UI/Img";

const PcArrayItem = ({ player, pcPArts, img }) => {
  return (
    <div className=" flex items-center px-3 mt-3 gap-2 group cursor-pointer">
      <div className="w-[3.25rem] h-[3.25rem] shrink-0">
        <Img className=" w-full h-full object-cover" src={img} alt="" />
      </div>
      <div className=" flex flex-col leading-5 ">
        <h1 className=" text-[15px] font-semibold group-hover:text-[#bb86fc]">
          {player}
        </h1>
        <p className=" font-semibold text-[11px]">{pcPArts}</p>
      </div>
    </div>
  );
};

const GamingPcsItems = ({ onclickfunction }) => {
  const preventPropogation = (event) => {
    event.stopPropagation();
  };

  const pcBuildArray = [
    {
      id: "1",
      player: "Player: 0ne",
      pcPArts: "H5 Flow Gaming PCs",
      img: `https://www.datocms-assets.com/34299/1678229906-playeroneprime-hero-white.png?auto=format&fit=max&w=1200`,
    },
    {
      id: "2",
      player: "Player: Two",
      pcPArts: "H5 Elite Gaming PCs",
      img: `https://www.datocms-assets.com/34299/1678229956-playertwo-hero-white.png?auto=format&fit=max&w=1200`,
    },
    {
      id: "3",
      player: "Player: Three",
      pcPArts: "H9 Elite Gaming PCs",
      img: `https://www.datocms-assets.com/34299/1689030709-playerthreeprime-h9-hero-no-badge-white.png?auto=format&fit=max&w=1200`,
    },
  ];

  return (
    <BackdropUI onclickfunction={onclickfunction}>
      <div
        className="hidden lg:flex w-[38.5rem] h-auto bg-[#313235] absolute top-[4.5rem] left-[10px] rounded-md px-4 py-6  gap-4 2xl:left-[6.5rem]"
        onClick={preventPropogation}
      >
        <div className=" w-[42%] flex flex-col text-white">
          <div className=" flex items-center gap-2 cursor-pointer group">
            <PiComputerTower className=" group-hover:text-[#bb86fc]" />
            <h1 className=" font-bold group-hover:text-[#bb86fc]">
              BUILD A CUSTOM PC
            </h1>
            <MdNavigateNext className=" ml-auto text-2xl group-hover:text-[#bb86fc]" />
          </div>
          <div className=" flex items-center gap-2 cursor-pointer mt-6">
            <HiDesktopComputer className=" group-hover:text-[#bb86fc]" />
            <h1 className=" font-bold group-hover:text-[#bb86fc]">
              PREBUILT GAMING PCS
            </h1>
            <MdNavigateNext className=" ml-auto text-2xl group-hover:text-[#bb86fc]" />
          </div>
          {pcBuildArray.map((item) => (
            <PcArrayItem
              key={item.id}
              player={item.player}
              pcPArts={item.pcPArts}
              img={item.img}
            />
          ))}
        </div>
        <div className=" w-[60%] bg-white rounded-md flex flex-col items-center">
          <div className=" flex flex-col items-center  text-center py-5 gap-2 text-black/80">
            <h1 className=" font-medium text-[17px]">NZXT SUMMER SALE</h1>
            <p className=" max-w-[15rem] leading-5 text-[15px]">
              Hot Savings On Gaming PCs, components, and peripherals
            </p>
          </div>
          <div className=" cursor-pointer overflow-hidden group w-full flex justify-center items-center">
            <img
              className=" group-hover:scale-125 transition-all"
              src="https://nzxt.com/assets/cms/34299/1689026720-summer-sale-2023-nav-cta.png?auto=format&fit=clip&h=270&w=270"
              alt=""
            />
          </div>
        </div>
      </div>
    </BackdropUI>
  );
};

const GamingPCs = ({ onclickfunction }) => {
  return (
    <>
      {createPortal(
        <GamingPcsItems onclickfunction={onclickfunction} />,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default GamingPCs;
