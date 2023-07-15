import { createSlice } from "@reduxjs/toolkit";

const store = [
  {
    id: 1,
    case: {
      pcParts: "NZXT H5 Flow",
      partsName: "Case",
      toggle: false,
      capacity: "Black",
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2F6gKiRO.png&w=96&q=75",
      quantity: 1,
      price: 94,
      total: 94,
    },
    cpu: {
      pcParts: `AMD Ryzen 5 5600X 6-Cores 3.7GHz`,
      partsName: "CPU",
      toggle: false,
      capacity: "BC-R55560X0-AMO",
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2F8o4Ab9.png&w=96&q=75",
      quantity: 1,
      price: 170,
      total: 170,
    },
    gpu: {
      pcParts: `ASUS GeForce RTX™ 4060 Ti Dual OC 8G`,
      partsName: "GPU",
      toggle: false,
      capacity: "Black",
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FU9eU7h.png&w=96&q=75",
      quantity: 1,
      price: 300,
      total: 300,
    },
    motherboard: {
      pcParts: `ASRock X570 Taichi WIFI`,
      partsName: "Motherboards",
      toggle: false,
      capacity: "BM-B550PAH-AU",
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FWP3I4b.png&w=96&q=75",
      quantity: 1,
      price: 260,
      total: 260,
    },
    ram: {
      pcParts: `Team T-FORCE Vulcan Z DDR4 3200MHz DDR4`,
      partsName: "RAM",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2F68fJ0u.png&w=96&q=75",
      quantity: 1,
      price: 39,
      total: 39,
      capacity: "16GB (2 x 8GB)",
    },
    storage: {
      pcParts: `Western Digital SN570`,
      partsName: "Storage",
      toggle: false,
      capacity: "500.0 GB",
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FHMtp4I.png&w=96&q=7",
      quantity: 1,
      price: 40,
      total: 40,
    },
    cooling: {
      pcParts: `Gigabyte Aorus Waterforce 240`,
      partsName: "Cooling",
      toggle: false,
      capacity: "Black",
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FgxRANA.png&w=96&q=75",
      quantity: 1,
      price: 160,
      total: 160,
    },
    powersupply: {
      pcParts: `XPG Core Reactor 650W Gold`,
      partsName: "Power Supplies",
      capacity: " BP-0650GM0-XG0",
      toggle: false,
      images:
        "https://nzxt.com/_next/image?url=https%3A%2F%2Fnzxt-web-assets-dev.s3-us-west-2.amazonaws.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FmlbKnf.png&w=96&q=75",
      quantity: 1,
      price: 100,
      total: 100,
    },
  },
];

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    store,
  },
  reducers: {
    toggleState: (state, action) => {
      const parts = action.payload.itemPartsName;
      const id = action.payload.id;
      const items = action.payload.items;

      const item = state.store.find((item) => item.id === id);

      if (item) {
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

    replaceParts: (state, action) => {
      const id = action.payload.id;
      const images = action.payload.images;
      const name = action.payload.name;
      const partsName = action.payload.partsName;
      const quantityData = +action.payload.quantity;
      const price = +action.payload.price;
      const capacity = action.payload.capacity;

      const item = state.store?.find((item) => item.id === id);

      if (item) {
        (item[partsName].images = images),
          (item[partsName].pcParts = name),
          (item[partsName].quantity = quantityData),
          (item[partsName].capacity = capacity),
          (item[partsName].total = quantityData * price);
      }
    },
  },
});

export const shoppingCart = (state) => state.myStore;

export const { replaceParts, toggleState } = storeSlice.actions;

export default storeSlice.reducer;
