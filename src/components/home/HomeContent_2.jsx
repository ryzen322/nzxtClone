import React from "react";
import Img from "../../UI/Img";

const HomeContent_2 = () => {
  return (
    <div className=" h-[470.75px] w-full overflow-hidden relative rounded-md p-8 md:h-[400px] 2xl:h-[550px]">
      <header className=" relative z-50 text-white max-w-[23rem] md:max-w-[18rem] mt-3 2xl:mt-[10rem] 2xl:left-[6rem] 2xl:max-w-[24rem]">
        <h1 className=" font-bold text-[1.75rem] 2xl:text-[2rem]">
          Game Your Way
        </h1>
        <p className=" text-[1.25rem] leading-6 mt-1 font-normal 2xl:text-[1.3rem]">
          Whether it is 144hz at 1080p, 60hz at 4K, or anything in-between—we
          have you covered. Customize your PC to your exact specifications to
          push performance, resolution, and more.
        </p>
      </header>

      <picture>
        <source
          media="(min-width:1920px)"
          srcSet={
            "https://nzxt.com/assets/cms/34299/1658962867-game-your-way-bg-web-1.png?auto=format&fit=max&h=900&w=1375"
          }
        />
        <source
          media="(min-width:770px)"
          srcSet={
            "https://nzxt.com/assets/cms/34299/1658962867-game-your-way-bg-web-1.png?auto=format&dpr=0.75&fit=max&h=900&w=1375"
          }
        />
        <Img
          src={`https://nzxt.com/assets/cms/34299/1658962868-game-your-way-bg-mobile-1.png?auto=format&fit=max&h=600&w=768`}
          className={" w-full h-full object-cover absolute top-0 left-0"}
        />
      </picture>
    </div>
  );
};

export default HomeContent_2;
