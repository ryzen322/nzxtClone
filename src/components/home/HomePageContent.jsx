import { Link } from "react-router-dom";

const HomePageContent = () => {
  return (
    <div className=" relative flex flex-col items-center justify-between w-full h-[35rem] bg-[#1C1D1F] mb-3 md:flex-row md:h-[19rem] overflow-hidden 2xl:h-[20rem]">
      <header className=" flex flex-col items-center max-w-[25rem] text-center text-white mt-6 relative z-20 md:max-w-[20rem] md:left-6 2xl:left-[20rem]">
        <h1 className=" text-2xl font-bold mb-3 leading-6">
          Game with NVIDIA® GeForce RTX™ 4070 Ti
        </h1>
        <p className=" text-xl">
          Up to 4x performance with DLSS 3. Up to 2x ray tracing performance.
          Build a custom PC with the new 4070 Ti GPU.
        </p>
        <Link className=" mt-3 border border-white px-5 py-1 rounded-md text-lg font-medium">
          Customize a PC
        </Link>
      </header>
      <picture>
        <source
          media="(min-width:770px)"
          srcSet={
            "https://nzxt.com/assets/cms/34299/1672872159-nvidia-4070ti-banner-dark.png?auto=format&fit=max&h=900&w=1375"
          }
        />
        <source
          media="(min-width:1500px)"
          srcSet={
            "https://nzxt.com/assets/cms/34299/1672872159-nvidia-4070ti-banner-dark.png?auto=format&fit=max&h=900&w=13755"
          }
        />

        <img
          className=" absolute bottom-0 left-7 md:-left-1 md:-top-16 lg:-top-[8rem] 2xl:w-[140rem] 2xl:-top-[25rem]"
          src={
            "https://nzxt.com/assets/cms/34299/1672872272-nvidia-4070ti-banner-dark-primary-m.png?auto=format&fit=max&h=550&w=384"
          }
          alt=""
        />
      </picture>
    </div>
  );
};

export default HomePageContent;
