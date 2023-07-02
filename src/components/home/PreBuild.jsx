import PreBuildItem from "./PreBuildItem";

const items = [
  {
    id: "item1",
    title: "Built By Experts",
    description: `Our highly-trained builders use top-rated components and
        professionally cable-manage your build.`,
    images: `https://nzxt.com/assets/cms/34299/1658891730-built-by-experts-primary.png?auto=format&fit=max&h=900&w=672`,
  },
  {
    id: "item2",
    title: "Transparent Pricing",
    description: `We list everything that goes into your gaming PC and we display cost clearly so you know exactly what your're getting`,
    images: `https://nzxt.com/assets/cms/34299/1658891858-transparent-pricing-primary-web.png?auto=format&fit=max&h=900&w=672`,
  },
];

const PreBuild = () => {
  return (
    <section className=" container mx-auto w-full flex flex-col items-center justify-between gap-[5rem] mt-10 lg:flex-row lg:px-5">
      {items.map((item) => (
        <PreBuildItem
          key={item.id}
          title={item.title}
          description={item.description}
          images={item.images}
        />
      ))}
    </section>
  );
};

export default PreBuild;
