import React from "react";

const ItemListCart = ({ partsName, pcParts }) => {
  return (
    <div className=" flex flex-col pl-2 ">
      <header className=" text-[12px] font-semibold">{partsName}</header>
      <p className=" text-[0.70rem] pl-2">{pcParts}</p>
    </div>
  );
};

export default ItemListCart;
