import React from "react";

const items = [
  {
    id: "item-1",
    title: "GPU",
    description: `The Graphics Processing Unit offers pure power to push peromance to
        new heights in the biggest games.`,
  },
  {
    id: "item-2",
    title: "CPU",
    description: `The Central Processing Unit multitasks as well as increases
        performance in CPU-intensive games and helps avoid bottlenecks.`,
  },
  {
    id: "item-3",
    title: "RAM",
    description: `Random Access Memory enables you to run multiple programs at
        once—the more RAM you have, the better you can multi-task.`,
  },
];

const PcDescription = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse items-center mt-10 mb-10 gap-5 2xl:flex-row 2xl:mt-[10rem] 2xl:justify-center">
      <div className=" flex flex-col items-center gap-7 2xl:items-start">
        <h1 className=" text-3xl font-bold md:text-4xl 2xl:text-5xl 2xl:max-w-[20rem]">
          Boost Your Performance
        </h1>
        {items.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col items-center text-center 2xl:text-left 2xl:items-start"
          >
            <h1 className=" text-lg font-semibold">{item.title}</h1>
            <p className=" text-lg text-slate-500 max-w-[25rem]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <picture className=" w-[425px] md:w-[600px]">
        <source
          media="(min-width:500px)"
          srcSet={`https://nzxt.com/assets/cms/34299/1659594250-boost-performance-primary.png?auto=format&fit=fillmax&h=1344&w=1344`}
        />
        <source
          media="(min-width:700px)"
          srcSet={`https://nzxt.com/assets/cms/34299/1659594250-boost-performance-primary.png?auto=format&fit=fillmax&h=1344&w=1344`}
        />
        <img
          src={`https://nzxt.com/assets/cms/34299/1659594250-boost-performance-primary.png?auto=format&fit=fillmax&h=1344&w=1344`}
          alt=""
        />
      </picture>
    </div>
  );
};

export default PcDescription;
