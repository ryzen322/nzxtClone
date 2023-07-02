import { BiEdit } from "react-icons/bi";

const MyShoppingListItem = ({
  images,
  name,
  partsName,
  executeScroll,
  toggleShoppingList,
}) => {
  const clickHandler = () => {
    executeScroll();
    toggleShoppingList();
  };

  return (
    <li
      className=" w-full h-[4.8rem] bg-[#222426] rounded-md flex items-center cursor-pointer p-1 gap-3 border border-black hover:border-white relative"
      onClick={clickHandler}
    >
      <div className=" flex justify-center items-center h-full w-[3.75rem] bg-white rounded-md shrink-0">
        <img className=" w-[3.5rem]" src={images} alt="" />
      </div>
      <div className=" flexflex-col leading-4">
        <h1 className=" font-semibold text-md">{partsName}</h1>
        <p className=" text-[.80rem] font-semibold">{name}</p>
      </div>
      <BiEdit size="1.25rem" className=" absolute right-1 top-1" />
    </li>
  );
};

export default MyShoppingListItem;
