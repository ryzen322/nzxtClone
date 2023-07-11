import { createPortal } from "react-dom";
import BackdropUI from "../../../UI/Backdrop";
import {
  MdKeyboardHide,
  MdNavigateNext,
  MdPersonalVideo,
} from "react-icons/md";
import { IoMdHeadset } from "react-icons/io";
import { BsMouse2Fill } from "react-icons/bs";

const PeripheralsPcsItems = () => {
  const preventPropogation = (event) => {
    event.stopPropagation();
  };

  return (
    <BackdropUI>
      <div
        className="hidden lg:grid w-[46rem] h-auto bg-[#313235] absolute top-[4.5rem] left-[10rem] rounded-md px-4 py-6  grid-cols-2 gap-4 2xl:left-[27rem]"
        onClick={preventPropogation}
      >
        <div className=" flex flex-col gap-4">
          <div className=" flex items-center text-[#dadae1] gap-2">
            <MdPersonalVideo className=" text-lg" />
            <h1 className=" font-bold">BUILD A CUSTOM KEYBOARD</h1>

            <MdNavigateNext className=" ml-auto text-2xl" />
          </div>
          <div className=" grid grid-cols-2 pt-3 flex-1">
            <div className=" flex flex-col text-[#dadae1] gap-2">
              <h1 className=" font-bold flex items-center gap-2">
                <MdKeyboardHide className=" text-lg" />
                KEYBOARD
              </h1>
              <div className=" px-2  cursor-pointer group">
                <h1 className=" text-[15px] font-semibold group-hover:text-[#bb86fc] ">
                  Keyboard
                </h1>
              </div>
            </div>
            <div className=" flex flex-col text-[#dadae1] gap-2">
              <h1 className=" font-bold flex items-center gap-2">
                <MdPersonalVideo className=" text-lg" />
                CAPTURE CARD
              </h1>
              <div className=" px-2  cursor-pointer group">
                <h1 className=" text-[15px] font-semibold group-hover:text-[#bb86fc] ">
                  CAPTURE CARD
                </h1>
              </div>
            </div>
            <div className=" flex flex-col text-[#dadae1] gap-2">
              <h1 className=" font-bold flex items-center gap-2">
                <BsMouse2Fill className=" text-lg" />
                MOUSE
              </h1>
              <div className=" px-2  cursor-pointer group">
                <h1 className=" text-[15px] font-semibold group-hover:text-[#bb86fc] ">
                  Mouse
                </h1>
              </div>
              <div className=" px-2  cursor-pointer group">
                <h1 className=" text-[15px] font-semibold group-hover:text-[#bb86fc] ">
                  Mouse Pad
                </h1>
              </div>
            </div>
            <div className=" flex flex-col text-[#dadae1] gap-2">
              <h1 className=" font-bold flex items-center gap-2">
                <IoMdHeadset className=" text-lg" />
                AUDIO
              </h1>
              <div className=" px-2  cursor-pointer group">
                <h1 className=" text-[15px] font-semibold group-hover:text-[#bb86fc] ">
                  Microphone
                </h1>
              </div>
              <div className=" px-2  cursor-pointer group">
                <h1 className=" text-[15px] font-semibold group-hover:text-[#bb86fc] ">
                  Audio
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center px-3 pt-4 bg-gradient-to-r from-[#7114E5] to-[#7114E5] rounded-md cursor-pointer group text-white overflow-hidden">
          <div className="flex flex-col text-center">
            <h1 className=" font-semibold text-[18px]">Relay Audio</h1>
            <p className=" font-medium text-base">
              Don't miss a beat with high-fidelity <br /> Relay Audio
            </p>
          </div>
          <img
            className=" w-full mt-4 group-hover:scale-110 transition-all"
            src="https://nzxt.com/assets/cms/34299/1685993583-relay-audio-nav-cta.png?auto=format&fit=clip&h=270&w=270"
            alt=""
          />
        </div>
      </div>
    </BackdropUI>
  );
};

const PeripheralsPc = () => {
  return (
    <>
      {createPortal(
        <PeripheralsPcsItems />,
        document.querySelector("#overlays")
      )}
    </>
  );
};

export default PeripheralsPc;
