import { useEffect, useState } from "react";

const BackdropUI = ({ children, onclickfunction }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!isModalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      body.style.overflow = "scroll";
    };
  }, [isModalOpen]);
  return (
    <div
      className=" w-screen h-screen z-[60] bg-black/30 fixed top-0 flex items-center justify-center bottom-0"
      onClick={onclickfunction}
    >
      {children}
    </div>
  );
};

export default BackdropUI;
