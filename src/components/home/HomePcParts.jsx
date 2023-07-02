import HomePcPartsItem from "./HomePcPartsItem";

const items = [
  {
    id: "item-1",
    parts: "Case",
    header: "The house. This is where everthting lives!",
    sub_Header: `The case is an aesthetically pleasing home for all your PC components. NZXT cases have channels to allow for clean cable management and an easy build. The case also serves as an electrical current ground for all of your components.`,
    images: `https://nzxt.com/assets/cms/34299/1634239760-meet-the-parts-case.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-2",
    parts: "Motherboard",
    header:
      "The translator. The connector. The motherboard gets everything talking.",
    sub_Header: `The motherboard is responsible for distributing power from your PSU to the other components.`,
    images: `https://nzxt.com/assets/cms/34299/1634239772-meet-the-parts-motherboard.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-3",
    parts: "CPU",
    header: "The brain. The CPU does the thinking",
    sub_Header: `The CPU, or Central Processing Unit, is responsible for taking your request and delegating tasks to various components to be executed.`,
    images: `https://nzxt.com/assets/cms/34299/1634239765-meet-the-parts-cpu.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-4",
    parts: "RAM",
    header:
      "The desk space. RAM affects the number of tasks that can be efficiently processed at once.",
    sub_Header: `RAM is responsible for pulling programs or files from mass storage into active use. The RAM will pull data from applications in use, acting as the short-term memory`,
    images: `https://nzxt.com/assets/cms/34299/1634239785-meet-the-parts-ram.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-5",
    parts: "SSD",
    header: "The garage. This is where you store your stuff.",
    sub_Header: `The SSD is a fast and efficient way to store and access games, apps, files, and more on your computer. SSD stands for solid-state drive, meaning it has no moving parts, which in turn offers less wear and tear, as well as faster access to your stuff`,
    images: `https://nzxt.com/assets/cms/34299/1634239790-meet-the-parts-ssd.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-6",
    parts: "PSU",
    header:
      "The engine. A PSU pulls, conditions, and sends power to your components.",
    sub_Header: `A common misconception is that the PSU provides power to the PC. It actually converts the high voltage alternating current (AC) power from your wall outlet to a more manageable direct current (DC). It then regulates the DC output to the different areas of your PC depending on power needs and requirements`,
    images: `https://nzxt.com/assets/cms/34299/1634239780-meet-the-parts-psu.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-7",
    parts: "Air Cooler",
    header: "The A/C unit. Keeps your house cool.",
    sub_Header: `An air cooler mounts to your CPU and uses 1 or 2 fans to move air through a series of thin metal fins. These metal fins house the heat given off by your CPU when it is under load.`,
    images: `https://nzxt.com/assets/cms/34299/1634239756-meet-the-parts-air-cooler.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-8",
    parts: "AIO Cooler",
    header: "The Refrigerator. Keeps your CPU running cool.",
    sub_Header: `An All in One cooler is a preassembled pump and radiator combination. The pump pushes a liquid cooling solution through a cold plate mounted on the CPU, which allows the heat from the CPU to be transferred into the liquid, which is then moved to the radiator, which is then cooled by the fans mounted to it. This cycle continues to keep your CPU cool.`,
    images: `https://nzxt.com/assets/cms/34299/1634239750-meet-the-parts-aio-cooler.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-9",
    parts: "GPU",
    header:
      "The turbocharger. The GPU makes your computer tear through heavy visual loads.",
    sub_Header: `The GPU is in charge of processing all of the visual data of a game or application.`,
    images: `https://nzxt.com/assets/cms/34299/1634239768-meet-the-parts-gpu.png?auto=format&fit=max&h=200&w=464`,
  },
  {
    id: "item-9",
    parts: "Wi-Fi",
    header: "The communications relay.",
    sub_Header: `The Wi-Fi card allows you to access your home Wifi network wirelessly.`,
    images: `https://nzxt.com/assets/cms/34299/1634239798-meet-the-parts-wi-fi.png?auto=format&fit=max&h=200&w=464`,
  },
];

const HomePcParts = () => {
  return (
    <>
      <div className=" container mx-auto w-full flex flex-col px-4 gap-[3rem]">
        <h1 className=" text-3xl font-bold">Meet the Parts</h1>
        <div className=" grid grid-auto-flow gap-4 grid-cols-1 w-full md:grid-cols-2 2xl:grid-cols-3">
          {items.map((item) => (
            <HomePcPartsItem
              key={item.id}
              parts={item.parts}
              header={item.header}
              sub_Header={item.sub_Header}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePcParts;
