const PreBuildItem = ({ description, title, images }) => {
  return (
    <div className=" flex flex-col h-[20rem] items-center 2xl:grow ">
      <div className=" flex flex-col items-center text-center gap-2">
        <h1 className=" text-2xl font-bold text-black/90 md:text-3xl 2xl:text-4xl">
          {title}
        </h1>
        <p className=" text-[1.24rem] max-w-[25rem] md:max-w-[30rem] lg:max-w-[26rem] 2xl:text-2xl 2xl:max-w-[30rem]">
          {description}
        </p>
      </div>
      <picture>
        <img
          className=" w-[25rem] md:w-[24rem] 2xl:w-[40rem]"
          src={images}
          alt=""
        />
      </picture>
    </div>
  );
};

export default PreBuildItem;
