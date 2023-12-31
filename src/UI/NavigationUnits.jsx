import React from "react";

const NavigationUnits = ({ toggleItems, children }) => {
  return (
    <div
      className={` w-full h-auto z-[100] absolute bg-white top-0 ${
        !toggleItems ? "-left-[100rem]" : "-left-0"
      } transition-all`}
    >
      {children}
    </div>
  );
};

export default NavigationUnits;
