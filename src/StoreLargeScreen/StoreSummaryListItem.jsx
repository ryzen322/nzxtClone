const StoreSummaryListItem = ({ partName, pcParts, quantity, price }) => {
  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const totalPrice = currency.format(price);

  return (
    <div className=" grid grid-cols-4">
      <div className=" flex flex-col col-span-2 ">
        <h1 className=" font-bold text-[17px]">{partName}</h1>
        <p className=" text-[16px]">{pcParts}</p>
      </div>
      <div className=" flex flex-col   items-end">
        <h1 className=" font-bold text-[17px]">QTY</h1>
        <p className=" text-[16px] mr-3">{quantity}</p>
      </div>
      <div className=" flex flex-col items-end">
        <h1 className=" font-bold text-[17px]">Price</h1>
        <p className=" text-[16px]">{totalPrice}</p>
      </div>
    </div>
  );
};

export default StoreSummaryListItem;
