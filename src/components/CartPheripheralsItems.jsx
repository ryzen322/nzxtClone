import { useState } from "react";
import CartItemList from "./CartItemList";

const CartPheripheralsItems = () => {
  const [itemList, setItemList] = useState([
    {
      id: "1",
      images:
        "https://nzxt.com/assets/cms/34299/1664816875-canvas-25f-hero-white.png?ar64=MTox&auto=format&fit=crop&h=375&w=375",
      canvas: "Canvas 25F",
      color: "4 Colors",
      price: "$339.99",
    },
    {
      id: "2",
      images:
        "https://nzxt.com/assets/cms/34299/1664828559-canvas-27f-hero-black.png?ar64=MTox&auto=format&fit=crop&h=375&w=375",
      canvas: "Canvas 27F",
      color: "4 Colors",
      price: "$359.99",
    },
  ]);

  return (
    <div className="  mb-8">
      <h1 className=" font-bold text-[25px]">Shop NZXT Canvas Monitors</h1>
      {itemList.map((item) => (
        <CartItemList
          key={item.id}
          images={item.images}
          canvas={item.canvas}
          color={item.color}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CartPheripheralsItems;
