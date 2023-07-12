import React from "react";
import Img from "../../UI/Img";

const HomeContent = () => {
  return (
    <div className=" relative flex flex-col items-center w-full overflow-hidden rounded-md  px-8 bg-[#1A1C1E]  md:flex-row 2xl:h-[25rem]">
      <header className=" relative z-50 text-white mt-12 mb-10 md:max-w-[22rem] 2xl:left-[6.5rem]">
        <h1 className=" font-bold text-xl">NZXT BLD</h1>
        <h1 className=" font-bold text-2xl 2xl:text-3xl 2xl:mb-4">
          Why Build a Custom PC With NZXT?
        </h1>
        <p className=" text-[1.24rem] 2xl:leading-6">
          Dive into our PC configurator and get the best framerate to push raw
          processing power from premium components. See in real time what FPS
          performance you'll get on some of the top games.
        </p>
      </header>
      <picture className=" z-50 md:shrink-0 md:w-[20rem] md:absolute md:right-0 md:bottom-0 2xl:w-[37rem] 2xl:right-9">
        <source
          media="(min-width:770px)"
          srcSet={`https://nzxt.com/assets/cms/34299/1658962667-why-buy-a-custom-bld-primary.png?auto=format&fit=max&h=900&w=672`}
        />

        <Img
          src={
            "https://nzxt.com/assets/cms/34299/1658962667-why-buy-a-custom-bld-primary.png?auto=format&fit=max&h=550&w=384"
          }
          className=""
        />
      </picture>
      <div className=" absolute rounded-md top-0">
        <picture>
          <source
            media="(min-width:1920px)"
            srcSet={`https://nzxt.com/assets/cms/34299/1658962647-why-build-a-custom-pc-bg-web.png?auto=format&fit=max&h=900&w=1375`}
          />
          <source
            media="(min-width:770px)"
            srcSet={`https://nzxt.com/assets/cms/34299/1658962647-why-build-a-custom-pc-bg-web.png?auto=format&fit=max&h=900&w=1375`}
          />

          <Img
            src={
              "https://nzxt.com/assets/cms/34299/1658962648-why-build-a-custom-pc-bg-mobile.png?auto=format&fit=max&h=600&w=768"
            }
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeContent;
