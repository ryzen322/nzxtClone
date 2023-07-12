import Img from "../UI/Img";

const CardListItems = ({ images, colors, price, size, partsName }) => {
  return (
    <div className=" flex flex-col">
      <div className=" h-[215.38px] flex items-center justify-center lg:h-[350px]">
        <Img src={images} className={" w-[11rem] lg:w-[17.5rem]"} />
      </div>
      <h1 className=" font-bold text-[14.5px] lg:text-[20px]">{partsName}</h1>
      <p className=" text-sm text-stone-600">{size}</p>

      <p className=" text-sm text-stone-400 my-2">{colors}</p>

      <p className=" text-sm mt-auto">{price}</p>
    </div>
  );
};

export default CardListItems;
