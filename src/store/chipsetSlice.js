import { createSlice } from "@reduxjs/toolkit";

export const chipseSlice = createSlice({
  name: "chipset",
  initialState: {
    value: true,
    navlistItems: [
      {
        id: "1",
        itemName: "Gaming PCs",
        img: `https://nzxt.com/assets/cms/34299/1687913644-pdp-1-5-nav-cta.png?auto=format&fit=clip&h=270&w=270`,
        color: `from-[#6F14E5] to-[#4B0CE5]`,
        text: "Power Up Your Prebuilt",
        toggleNav: false,
        itemArray: [
          {
            id: "1",
            data: "Build A Custom PC",
          },
          {
            id: "2",
            data: "Prebuilt Gaming PCs",
          },
          {
            id: "3",
            data: "Limited Edition Gaming PCs",
          },
        ],
      },
      {
        id: "2",
        itemName: "Components",
        img: `https://nzxt.com/assets/cms/34299/1653470212-h7-nav-cta.png?auto=format&fit=clip&h=270&w=270`,
        color: `bg-[#1B1C1D]`,
        text: "The H7 Series",
        toggleNav: false,
        itemArray: [
          {
            id: "1",
            data: "Cases",
          },
          {
            id: "2",
            data: "Cooling",
          },
          {
            id: "3",
            data: "Components",
          },
          {
            id: "4",
            data: "PCIe Riser Cable",
          },
          {
            id: "5",
            data: "Vertical GPU Mounting Kit",
          },
          {
            id: "6",
            data: "Puck",
          },
        ],
      },
      {
        id: "3",
        itemName: "Monitors",
        img: `https://nzxt.com/assets/cms/34299/1664838494-canvas-fhd-nav-cta-1.png?auto=format&fit=clip&h=270&w=270`,
        color: `from-[#6F14E5] to-[#4B0CE5]`,
        text: "Canvas FHD Monitors",
        toggleNav: false,
        itemArray: [
          {
            id: "1",
            data: "FHD Monitors",
          },
          {
            id: "2",
            data: "QHD Monitors",
          },
          {
            id: "3",
            data: "Monitor Arm (Single)",
          },
          {
            id: "4",
            data: "Monitor Arm (Dual)",
          },
        ],
      },
      {
        id: "4",
        itemName: "Peripherals",
        img: `https://nzxt.com/assets/cms/34299/1685993583-relay-audio-nav-cta.png?auto=format&fit=clip&h=270&w=270`,
        color: `from-[#6F14E5] to-[#4B0CE5]`,
        text: "Relay Audio",
        toggleNav: false,
        itemArray: [
          {
            id: "1",
            data: "Build A Custom Keyboard",
          },
          {
            id: "2",
            data: "Keyboard",
          },
          {
            id: "3",
            data: "Mouse",
          },
          {
            id: "4",
            data: "Mouse Pad",
          },
          {
            id: "5",
            data: "Capture Card",
          },
          {
            id: "6",
            data: "Microphone",
          },
          {
            id: "7",
            data: "Audio",
          },
        ],
      },
      {
        id: "5",
        itemName: "Software",
        img: `https://nzxt.com/assets/cms/34299/1685993583-relay-audio-nav-cta.png?auto=format&fit=clip&h=270&w=270`,
        color: `from-sky-500 to-indigo-500`,
        text: "Relay Audio",
        toggleNav: false,
        itemArray: [
          {
            id: "1",
            data: "Build A Custom Keyboard",
          },
          {
            id: "2",
            data: "Keyboard",
          },
          {
            id: "3",
            data: "Mouse",
          },
          {
            id: "4",
            data: "Mouse Pad",
          },
          {
            id: "5",
            data: "Capture Card",
          },
          {
            id: "6",
            data: "Microphone",
          },
          {
            id: "7",
            data: "Audio",
          },
        ],
      },
      {
        id: "6",
        itemName: "Community",
        img: `https://nzxt.com/assets/cms/34299/1639696534-partner-program-nav-cta.png?auto=format&fit=clip&h=270&w=270`,
        color: `bg-[#1B1C1D]`,
        text: "NZXT Partner",
        toggleNav: false,
        itemArray: [
          {
            id: "1",
            data: "Podcast",
          },
          {
            id: "2",
            data: "NZXT Club & Discord",
          },
          {
            id: "3",
            data: "Newsroom & Blog",
          },
          {
            id: "4",
            data: "PArtner Program",
          },
          {
            id: "5",
            data: "Company",
          },
          {
            id: "6",
            data: "Careers",
          },
          {
            id: "7",
            data: "Product Updates",
          },
        ],
      },
    ],
  },
  reducers: {
    toggleNav: (state, action) => {
      const id = action.payload.id;

      const item = state.navlistItems.find((item) => item.id === id);

      if (item) {
        item.toggleNav = !item.toggleNav;
      }
      if (!item) {
        item.toggleNav = false;
      }
    },
  },
});

export const { toggleNav } = chipseSlice.actions;

export default chipseSlice.reducer;
