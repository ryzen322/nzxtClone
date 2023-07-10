import React from "react";

const BackdropUI = ({ children, onclickfunction }) => {
  return (
    <div
      className=" w-screen h-screen z-[60] bg-black/30 fixed top-0 flex items-center justify-center"
      onClick={onclickfunction}
    >
      {children}
    </div>
  );
};

export default BackdropUI;
