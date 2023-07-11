import { createPortal } from "react-dom";
import BackdropUI from "../../../UI/Backdrop";
import { PiMonitorLight } from "react-icons/pi";

const MonitorItemPc = () => {
  const preventPropogation = (event) => {
    event.stopPropagation();
  };
  return (
    <BackdropUI>
      <div
        className=" hidden lg:grid w-[45rem] h-auto bg-[#313235] absolute top-[4.5rem] left-[3rem] rounded-md px-4 py-6 grid-cols-2 gap-2 2xl:left-[20rem]"
        onClick={preventPropogation}
      >
        <div className=" grid grid-cols-2">
          <div className=" flex flex-col gap-3">
            <h1 className=" font-bold text-[#dadae1]/95 flex items-center gap-1">
              <PiMonitorLight className=" text-lg" /> CANVAS
            </h1>
            <div className=" px-2 flex flex-col gap-3 group">
              <h1 className=" font-bold group-hover:text-[#bb86fc] text-white text-sm cursor-pointer">
                FHD Monitors
              </h1>
            </div>

            <div className=" px-2 flex flex-col gap-3 group">
              <h1 className=" font-bold group-hover:text-[#bb86fc] text-white text-sm cursor-pointer">
                QHD Monitors
              </h1>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h1 className=" font-bold text-[#dadae1]/95 flex items-center gap-1">
              <PiMonitorLight className=" text-lg" /> MONITOR ARM
            </h1>
            <div className=" px-2 flex flex-col gap-3 group">
              <h1 className=" font-bold group-hover:text-[#bb86fc] text-white text-sm cursor-pointer">
                FHD Monitors <br /> (Single)
              </h1>
            </div>

            <div className=" px-2 flex flex-col gap-3 group">
              <h1 className=" font-bold group-hover:text-[#bb86fc] text-white text-sm cursor-pointer">
                QHD Monitors
                <br /> (Single)
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center px-3 pt-4 bg-gradient-to-r from-[#7114E5] to-[#7114E5] rounded-md cursor-pointer group text-white overflow-hidden">
          <div className="flex flex-col text-center">
            <h1 className=" font-semibold text-lg">Canvas FHD Monitors</h1>
            <p className=" font-medium text-sm">
              Put your best performance on display
            </p>
          </div>
          <img
            className=" w-full mt-4 group-hover:scale-110 transition-all"
            src="https://nzxt.com/assets/cms/34299/1664838494-canvas-fhd-nav-cta-1.png?auto=format&fit=clip&h=270&w=270"
            alt=""
          />
        </div>
      </div>
    </BackdropUI>
  );
};

const MonitorPc = () => {
  return (
    <>{createPortal(<MonitorItemPc />, document.querySelector("#overlays"))}</>
  );
};

export default MonitorPc;
