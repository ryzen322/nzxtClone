import React from "react";

const items = [
  {
    id: "item-1",
    title: "We Can BLD It",
    description: `Our experts professionally build, fine-tune, and test to ensure your product is ready go.`,
  },
  {
    id: "item-2",
    title: "2-Year Warranty",
    description: `Our 2-year warranty covers all parts and labor, and our award-winning customer service team is ready to help`,
  },
  {
    id: "item-3",
    title: "Fast Build Service",
    description: `Our pros are ready to get started on your order immediately and ship in 48 hours.`,
  },
];

const PreBuildDesc = () => {
  return (
    <>
      <div className=" container mx-auto flex flex-col justify-between items-center gap-[7.5rem] w-full mt-[7.5rem] md:flex-row md:gap-2 md:px-7  2xl:mt-[15rem] 2xl:px-[10rem] 2xl:gap-[6.5rem]">
        {items.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col items-center text-center max-w-[24rem] md:max-w-[11.25rem] 2xl:max-w-[30rem] "
          >
            <h1 className=" text-[1.70rem] font-bold text-black/90">
              {item.title}
            </h1>
            <p className=" text-[1.27rem]">{item.description}</p>
          </div>
        ))}
      </div>
      <div className=" text-center mt-[3.5rem] flex flex-col items-center gap-3 ">
        <h1 className=" text-3xl font-bold md:text-4xl">Build Your Dream PC</h1>
        <p className=" text-stone-500 text-[1.05rem] max-w-[27rem] md:max-w-[35rem]">
          Choose from a variety of components and focus on the parts that will
          make the perfect pc experience for you.
        </p>
      </div>
    </>
  );
};

export default PreBuildDesc;
