import { useSelector } from "react-redux";

const StorageCost = ({ priceItem = [] }) => {
  const total = priceItem
    .map((data) => data.price)
    .reduce((curr, value) => curr + value, 0);
  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const price = currency.format(total);

  return (
    <div className=" absolute w-full left-0 bottom-0 h-[6rem] bg-[#111113] flex items-center pb-6 pt-1 px-[3rem]">
      <div className=" h-full flex flex-col justify-center text-white pr-[3rem] border-r border-white">
        <p className=" font-semibold leading-3">Estimated</p>
        <p className=" font-semibold">Shipping</p>
        <p className=" text-sm">07/10/2023</p>
      </div>
      <div className=" h-full flex flex-col justify-center text-white px-2">
        <p className=" font-semibold leading-5 text-lg ">Subtotal: {price}</p>
        <p className=" leading-5">Monthly payments availabe. Learn</p>
        <p className=" text-sm">More</p>
      </div>
      <button className=" ml-auto bg-[#7315E5] text-white rounded-md px-[3rem] py-[.6rem]">
        Next
      </button>
    </div>
  );
};

export default StorageCost;
