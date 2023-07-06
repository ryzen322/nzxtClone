import StoreLargeSettings from "./StoreLargeSettings";
import StoreSummaryList from "./StoreSummaryList";

const StoreLargeSummary = ({ dataArray = [] }) => {
  const item2 = dataArray.slice(0, 4);
  const item3 = dataArray.slice(4, dataArray.length);
  const item4 = [
    {
      id: "1",
      partsName: "Software",
      quantity: "1",
      pcParts: "Widonws 11 Home",
      price: 119.99,
    },
    {
      id: "2",
      partsName: "Services",
      quantity: "1",
      pcParts: "Standard Services (US)",
      price: 109.0,
    },
  ];

  return (
    <div className=" w-full text-white flex flex-col px-4 py-6 gap-3  h-[28rem]  overflow-x-auto scrollBarHide 2xl:h-[50rem]">
      <h1 className=" font-bold text-sm">
        Estimated Shipping: <span className=" font-normal">07/11/2023</span>
      </h1>
      <StoreLargeSettings />
      <StoreSummaryList item2={item2} />
      <StoreSummaryList item2={item3} />
      <StoreSummaryList item2={item4} />
    </div>
  );
};

export default StoreLargeSummary;
