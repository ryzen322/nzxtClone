import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md";
import MyShoppingCart from "./Cart/MyShoppingCart";

const ShoppingList = ({ executeScroll, funcState = [] }) => {
  const itemData = useSelector((state) => state.myStore);
  const [toggle, setToggle] = useState(false);

  const partsItemArray = [];
  const sample = [];

  for (const item of itemData) {
    partsItemArray.push(item.case);
    partsItemArray.push(item.cpu);
    partsItemArray.push(item.gpu);
    partsItemArray.push(item.motherboard);
    partsItemArray.push(item.ram);
    partsItemArray.push(item.storage);
    partsItemArray.push(item.cooling);
    partsItemArray.push(item.powersupply);
  }

  const total = partsItemArray
    .map((cur) => cur.total)
    .reduce((curr, value) => curr + value, 0);

  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const price = currency.format(total);

  const toggleShoppingList = () => {
    setToggle((state) => !state);
  };

  for (const item of partsItemArray) {
    const pcParts = item.pcParts;
    const partsName = item.partsName;
    const images = item.images;
    sample.push({ pcParts, partsName, images });
  }

  const mergedArray = sample.map((item, index) => {
    return {
      ...item,
      function: funcState[index].function,
    };
  });

  return (
    <>
      <div className=" fixed h-[7.5rem] bottom-0 left-0 bg-black w-full border-t  border-stone-700 p-2 flex flex-col gap-2">
        <div className=" flex items-center gap-3">
          <div
            className=" w-[2.4rem] h-[2.4rem]  rounded-full border border-white flex justify-center items-center cursor-pointer"
            onClick={toggleShoppingList}
          >
            <MdOutlineNavigateNext
              color="#ffff"
              size="1.5rem"
              className=" rotate-[270deg]"
            />
          </div>

          <div className=" text-white leading-5">
            <h1 className=" font-bold">SubTotal: {price}</h1>
            <p className=" text-sm">Monthly payments available.Learn More</p>
          </div>
        </div>
        <Link
          to="../cart"
          className=" text-stone-300 w-full h-5 bg-[#7315E5] flex justify-center items-center rounded-md text-lg font-semibold py-[1.4rem]"
        >
          Next
        </Link>
      </div>
      {
        <MyShoppingCart
          executeScroll={executeScroll}
          partsItemArray={mergedArray}
          state={toggle}
          toggleShoppingList={toggleShoppingList}
        />
      }
    </>
  );
};

export default ShoppingList;
