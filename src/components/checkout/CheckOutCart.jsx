import Img from "../../UI/Img";

const CheckOutCart = ({
  img,
  partName,
  quantity,
  price,
  capacity = "Assembly",
}) => {
  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const priceItem = currency.format(price);

  return (
    <div className=" flex items-center py-2 relative gap-3 mt-1">
      <div className=" w-[64px] h-[64px]  rounded-md  relative shrink-0">
        <Img src={img} alt="" className="relative aspect-square rounded-md" />
        <div className=" w-[1.25rem] h-[1.25rem] bg-[#727272e6] absolute z-50 -top-[10px] -right-[10px] rounded-full flex items-center justify-center text-white">
          <h1>{quantity}</h1>
        </div>
      </div>
      <div className=" flex flex-col leading-5">
        <h1>{partName}</h1>
        <p className=" text-[#737373] text-xs font-semibold">{capacity}</p>
      </div>
      <h1 className=" ml-auto text-sm">{priceItem}</h1>
    </div>
  );
};

export default CheckOutCart;
