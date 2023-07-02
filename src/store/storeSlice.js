import { createSlice } from "@reduxjs/toolkit";
import {
  Case,
  cooling,
  ram,
  psu,
  storage,
  gpu,
  cpu,
  motherboard,
} from "./Pcparts/parts";

const initialState = [
  {
    id: 1,
    case: {
      pcParts: "NZXT H5 Flow",
      partsName: "Case",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2F6gKiRO.png&w=96&q=75",
      quantity: 1,
      price: 94,
      total: 94,
      itemArray: Case,
    },
    cpu: {
      pcParts: `AMD Ryzen 5 5600X 6-Cores 3.7GHz`,
      partsName: "CPU",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2F8o4Ab9.png&w=96&q=75",
      quantity: 1,
      price: 169.0,
      total: 169.0,
      itemArray: cpu,
    },
    gpu: {
      pcParts: `ASUS GeForce RTX™ 4060 Ti Dual OC 8G`,
      partsName: "GPU",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FU9eU7h.png&w=96&q=75",
      quantity: 1,
      price: 424.0,
      total: 424.0,
      itemArray: gpu,
    },
    motherboard: {
      pcParts: `ASRock X570 Taichi WIFI`,
      partsName: "Motherboards",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FWP3I4b.png&w=96&q=75",
      quantity: 1,
      price: 259.99,
      total: 259.99,
      itemArray: motherboard,
    },
    ram: {
      pcParts: `Team T-FORCE Vulcan Z DDR4 3200MHz DDR4`,
      partsName: "RAM",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2F68fJ0u.png&w=96&q=75",
      quantity: 1,
      price: 38.99,
      total: 38.99,
      itemArray: ram,
    },
    storage: {
      pcParts: `Western Digital SN570`,
      partsName: "Storage",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FHMtp4I.png&w=96&q=7",
      quantity: 1,
      price: 33.99,
      total: 33.99,
      itemArray: storage,
    },
    cooling: {
      pcParts: `Gigabyte Aorus Waterforce 240`,
      partsName: "Cooling",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FgxRANA.png&w=96&q=75",
      quantity: 1,
      price: 33.99,
      total: 33.99,
      itemArray: cooling,
    },
    powersupply: {
      pcParts: `XPG Core Reactor 650W Gold`,
      partsName: "Power Supplies",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fnzxt-web-assets-dev.s3-us-west-2.amazonaws.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FmlbKnf.png&w=96&q=75",
      quantity: 1,
      price: 99.99,
      total: 99.99,
      itemArray: psu,
    },
  },
];

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    toggleState: (state, action) => {
      const parts = action.payload.itemPartsName;
      const id = action.payload.id;
      const items = action.payload.items;

      const item = state.find((item) => item.id === id);

      if (item) {
        // item[parts].toggle = true;

        items.map((data) => {
          if (parts === data) {
            return (item[parts].toggle = true);
          }
          if (parts !== data) {
            return (item[data].toggle = false);
          }
        });
      }
    },
    replaceItems: (state, action) => {
      const brandName = action.payload.name;
      const id = action.payload.idData;
      const images = action.payload.images;
      const partsName = action.payload.partsName;
      const item = state.find((item) => item.id === id);

      if (item) {
        (item[partsName].images = images),
          (item[partsName].pcParts = brandName);
      }
    },
    replaceParts: (state, action) => {
      const id = action.payload.id;
      const images = action.payload.images;
      const name = action.payload.name;
      const partsName = action.payload.partsName;

      const item = state.find((item) => item.id === id);

      if (item) {
        (item[partsName].images = images), (item[partsName].pcParts = name);
      }
    },
  },
});

export const { replaceParts, replaceItems, toggleState } = storeSlice.actions;

export default storeSlice.reducer;
