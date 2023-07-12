import React from "react";
import Img from "../../UI/Img";

const HomePcPartsItem = ({ images, parts, header, sub_Header }) => {
  return (
    <div className=" flex flex-col border-t items-center border-stone-400/40 h-auto gap-3 ">
      <Img
        src={images}
        className={
          " w-[400px] h-[250px] md:w-[350px] md:h-[200px] xl:w-[450px] xl:h-[250px]"
        }
      />

      <div className=" self-start flex flex-col gap-1">
        <h1 className=" text-2xl font-semibold 2xl:text-3xl">{parts}</h1>
        <p className="  italic text-lg text-black/90">{header}</p>
      </div>
      <p className="self-start text-[1.05rem]">{sub_Header}</p>
    </div>
  );
};

export default HomePcPartsItem;
