import { FaComputer } from "react-icons/fa6";
import { GiComputerFan } from "react-icons/gi";
import { HiOutlineCog } from "react-icons/hi";

const componentsItemArray = [
  {
    id: "1",
    partName: "CASE",
    Icon: FaComputer,
    partsArray: [
      {
        id: "1",
        partsCode: "H9",
        partsName: "Dual-Chamber Mid-Tower Cases",
      },
      {
        id: "2",
        partsCode: "H7",
        partsName: "ATX Mid-Tower Cases",
      },

      {
        id: "3",
        partsCode: "H5",
        partsName: "Compact ATX Mid-Tower Cases",
      },
      {
        id: "4",
        partsCode: "H210",
        partsName: "Compact Mini-ITX Cases",
      },
      {
        id: "5",
        partsCode: "H1",
        partsName: "Small From Factor Mini-ITX",
      },
      {
        id: "6",
        partsCode: "CRFT",
        partsName: "Limited Edition",
      },
    ],
  },
  {
    id: "2",
    partName: "COOLING",
    Icon: GiComputerFan,
    partsArray: [
      {
        id: "1",
        partsCode: "The New Krakens",
        partsName: "AIO Liquid Coolers with LCD Display",
      },
      {
        id: "2",
        partsCode: "Kraken Z",
        partsName: "AIO Liquid Coolers with LCD Display",
      },
      {
        id: "3",
        partsCode: "Kraken X",
        partsName: "Aio Liquid Coolers with Infinity Mirrors Display",
      },
      {
        id: "4",
        partsCode: "Kraken 120",
        partsName: "120mm Liquid Coolers with RGB",
      },
      {
        id: "5",
        partsCode: "F Series Fans",
        partsName: "RGB & High-performance Fans",
      },
      {
        id: "6",
        partsCode: "T120 Air Coolers",
        partsName: "CPU Air Coolers",
      },
    ],
  },
  {
    id: "3",
    partName: "COMPONENTS",
    Icon: HiOutlineCog,
    partsArray: [
      {
        id: "1",
        partsCode: "Motherboards",
        partsName: "Gaming Motherboards",
      },
      {
        id: "2",
        partsCode: "Power",
        partsName: "80 Plus Rated PSUs",
      },
      {
        id: "3",
        partsCode: "Lighting",
        partsName: "Expanded RGB Lighting and Control",
      },
    ],
  },
];

export default componentsItemArray;
