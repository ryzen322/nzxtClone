import CheckOutCart from "./CheckOutCart";
import { useSelector } from "react-redux";
import CheckOutInput from "./CheckOutInput";
import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";

const CheckOutArrayList = () => {
  const data = useSelector((state) => state.myStore);
  const [gift, setGift] = useState("");

  const listOfData = [];

  for (const item of data) {
    listOfData.push(item.case);
    listOfData.push(item.cpu);
    listOfData.push(item.gpu);
    listOfData.push(item.motherboard);
    listOfData.push(item.ram);
    listOfData.push(item.storage);
    listOfData.push(item.cooling);
    listOfData.push(item.powersupply);
  }
  return (
    <div className={` w-full flex flex-col px-2 lg:px-12`}>
      <div className=" lg:max-h-[40rem] overflow-y-auto">
        {listOfData.map((item) => (
          <CheckOutCart
            key={item.pcParts}
            img={item.images}
            price={item.price}
            partName={item.pcParts}
            quantity={item.quantity}
            capacity={item.capacity}
          />
        ))}
        <CheckOutCart
          img="https://cdn.shopify.com/s/files/1/1986/9305/products/mR0yhb_78c14e5d-7ca5-4860-bfb4-9b6588934e27_small.png?v=1677636042"
          price="119.99"
          partName="Standard Service (US)"
          quantity="1"
          capacity="BS-WN11HOM-MT3"
        />
        <CheckOutCart
          img="https://cdn.shopify.com/s/files/1/1986/9305/files/LUy8nw_62c90d39-529a-4322-9ddf-c724cfdbbde2_small.png?v=1689032152"
          partName="Standard Service (US)"
          price="109.99"
          quantity="1"
          capacity="ASSEMBLY"
        />
      </div>

      <div className=" flex items-center gap-2 my-[3rem] lg:my-[1rem]">
        <CheckOutInput
          name="Gift card or discount code"
          inputValue={gift}
          setInput={setGift}
          className=" w-[80%] mt-0"
        />
        <button
          className={` h-[2.90rem]  w-[20%]  ${
            !+gift.length > 0 ? "bg-[#C8C8C8]" : "bg-[#1990C6]"
          } rounded-md flex items-center justify-center transition-all duration-200`}
        >
          <GrLinkNext fill="#ffff" />
        </button>
      </div>
      <div className=" flex items-center justify-between my-2">
        <h1 className=" text-sm font-medium text-[#545454]">Subtotal</h1>
        <h1 className=" text-sm font-medium text-[#545454]">$1,122.91</h1>
      </div>
      <div className=" flex items-center justify-between my-2">
        <h1 className=" text-sm font-medium text-[#545454]">Shipping</h1>
        <h1 className=" text-xs font-medium text-[#919191]">
          Calculated at next step
        </h1>
      </div>

      <div className=" flex items-center justify-between mt-6">
        <h1 className=" text-lg  text-[#545454]">Total</h1>
        <h1 className=" text-xs font-medium text-[#919191] flex gap-2 items-center">
          USD <span className="text-2xl text-black">$1,122.91</span>
        </h1>
      </div>
    </div>
  );
};

export default CheckOutArrayList;
