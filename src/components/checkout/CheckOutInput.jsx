import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const CheckOutInput = ({ inputValue = "", name, setInput, className }) => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (click) {
      body.addEventListener("click", () => {
        setClick(false);
      });
    }
  }, [click]);

  const toggleClick = (e) => {
    e.stopPropagation();
    setClick(true);
  };

  return (
    <div
      className={` h-[2.90rem] w-full  mt-4 rounded-md  ${
        click ? "ring-[#1990c6] ring-2" : "ring-[#c8c8c8] ring-1"
      } px-2 py-1 transition-all ${className}`}
      onClick={toggleClick}
    >
      <p
        className={` ${
          !+inputValue.length > 0 ? "text-[0px]" : "text-[11.7px]"
        } w-full outline-none placeholder:text-[#545454] transition-all ease-in-out duration-200`}
      >
        {name}
      </p>
      <input
        type="text"
        placeholder={name}
        value={inputValue}
        className={` relative ${
          !+inputValue.length > 0 ? "h-[89%]" : "h-[50%]"
        } w-full outline-none placeholder:text-[#545454] transition-all ease-in-out duration-100`}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default CheckOutInput;
