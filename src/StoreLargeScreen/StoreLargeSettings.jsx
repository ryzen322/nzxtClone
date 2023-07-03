import SummaryCard from "../UI/SummaryCard";
import { FiBluetooth, FiWifi } from "react-icons/fi";
import StoreLargeIncludes from "./StoreLargeIncludes";
import { MdOutlineLightMode } from "react-icons/md";
import { BsUsbC } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";

const StoreLargeSettings = () => {
  const includes = [
    {
      id: "1",
      icons: <FiWifi />,
      text: "VR Ready",
      ready: true,
    },
    {
      id: "2",
      icons: <PiTelevisionSimpleLight />,
      text: "Stream Ready",
      ready: false,
    },
    {
      id: "3",
      icons: <MdOutlineLightMode />,
      text: "Lighting",
      ready: false,
    },
    {
      id: "4",
      icons: <FiWifi />,
      text: "WiFi",
      ready: true,
    },
    {
      id: "5",
      icons: <FiBluetooth />,
      text: "Bluetooth",
      ready: true,
    },
    {
      id: "6",
      icons: <BsUsbC />,
      text: "USB-C",
      ready: true,
    },
  ];

  return (
    <SummaryCard className={` flex flex-col items-center py-3 px-2 gap-3`}>
      <h1 className=" font-bold text-lg">Includes</h1>
      <div className=" w-full h-full border-t border-white grid grid-cols-3 grid-rows-2 gap-1">
        {includes.map((item) => (
          <StoreLargeIncludes
            key={item.id}
            icons={item.icons}
            text={item.text}
            ready={item.ready}
          />
        ))}
      </div>
    </SummaryCard>
  );
};

export default StoreLargeSettings;
