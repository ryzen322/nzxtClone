import React from "react";

const Backdrop = ({ children, onclickfunction }) => {
  return (
    <div
      className=" w-screen h-screen z-20 bg-black/30 fixed top-0 left-0"
      onClick={onclickfunction}
    >
      {children}
    </div>
  );
};

export default Backdrop;
