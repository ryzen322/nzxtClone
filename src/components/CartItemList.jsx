/* eslint-disable react/prop-types */
const CartItemList = ({ images, canvas, color, price }) => {
  return (
    <div className=" w-full flex p-3 gap-3 mt-8  border-b border-stone-600/30">
      <div className=" w-[90px] h-[150px] flex items-center justify-center">
        <img className=" max-w-[90px] max-h-[90px]" src={images} alt="" />
      </div>
      <div className=" flex flex-col">
        <span className=" flex items-center justify-center border-0  ring-1 ring-black rounded-md text-sm  shrink-0  w-[70px] p-1">
          Sold Out
        </span>
        <h1 className=" font-bold text-[18px]">{canvas}</h1>
        <p className=" text-stone-600">{color}</p>
        <p className=" font-semibold text-[17px]">{price}</p>
      </div>
      <div className="ml-auto flex">
        <button className=" bg-[#7315E5] self-end text-white/95 text-lg flex items-center justify-center rounded-md px-4 py-2 font-semibold">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CartItemList;
