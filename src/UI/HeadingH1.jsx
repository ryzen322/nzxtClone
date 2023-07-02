import React from "react";

const HeadingH1 = ({ children, className }) => {
  return (
    <h1 className={`text-stone-200 font-medium text-[1.4rem] ${className}`}>
      {children}
    </h1>
  );
};

export default HeadingH1;
