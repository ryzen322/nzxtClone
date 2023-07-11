import { createPortal } from "react-dom";
import BackdropUI from "../../../UI/Backdrop";
import { MdSpeed } from "react-icons/md";

const SoftwareItemPc = () => {
  const preventPropogation = (event) => {
    event.stopPropagation();
  };
  return (
    <BackdropUI>
      <div
        className="hidden lg:block w-auto h-auto bg-[#313235] absolute top-[4.5rem] left-[32rem] rounded-md px-6 py-6 2xl:left-[42rem]"
        onClick={preventPropogation}
      >
        <div className=" flex flex-col text-[#dadae1] gap-4">
          <h1 className=" font-bold flex items-center gap-2">
            <MdSpeed className=" text-lg" />
            PC MONITORING
          </h1>
          <div className=" px-2  cursor-pointer group">
            <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
              CAM
            </h1>
          </div>
          <div className=" px-2  cursor-pointer group">
            <h1 className=" text-[15px] font-bold group-hover:text-[#bb86fc] ">
              CAM Feedback
            </h1>
          </div>
        </div>
      </div>
    </BackdropUI>
  );
};

const SoftwarePc = () => {
  return (
    <>{createPortal(<SoftwareItemPc />, document.querySelector("#overlays"))}</>
  );
};

export default SoftwarePc;
