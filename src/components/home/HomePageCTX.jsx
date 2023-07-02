import { Link } from "react-router-dom";

const HomePageCTX = () => {
  return (
    <div className=" h-[48rem] w-full  relative flex justify-center items-center lg:justify-normal ">
      <header className=" relative z-30 flex flex-col items-center lg:items-start ml-[4rem]">
        <h1 className=" text-4xl font-bold text-black/70 lg:text-6xl">
          Build A Custom PC
        </h1>
        <p className=" text-lg mt-6">
          Custom PCs designed by you, built by us.
        </p>

        <Link
          to="build/pc"
          className=" mt-3 bg-Secondary-Color text-white text-lg rounded-md px-4 py-2 font-semibold scale-100 hover:scale-105 transition-all "
        >
          Start Your PC Build
        </Link>
      </header>

      <div className=" absolute h-full w-full top-0 overflow-hidden">
        <picture>
          <source
            media="(min-width:1025px)"
            srcSet={
              "https://nzxt.com/assets/cms/34299/1659593175-custom-pc-category-hero-bg-web.png?auto=format&fit=max&h=1500&w=2500"
            }
          />
          <source
            media="(min-width:500px)"
            srcSet={
              "https://nzxt.com/assets/cms/34299/1659593177-custom-pc-category-hero-bg-mobile.png?auto=format&fit=max&h=1200&w=1024"
            }
          />
          <source
            media="(min-width:768px)"
            srcSet={
              "https://nzxt.com/assets/cms/34299/1659593177-custom-pc-category-hero-bg-mobile.png?auto=format&fit=max&h=1200&w=1024"
            }
          />
          <img
            className=" w-full h-full object-cover"
            src={
              "https://nzxt.com/assets/cms/34299/1659593175-custom-pc-category-hero-bg-web.png?auto=format&fit=max&h=1500&w=2500"
            }
            alt="Faded Custom PC"
            title="Faded Custom PC"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomePageCTX;
