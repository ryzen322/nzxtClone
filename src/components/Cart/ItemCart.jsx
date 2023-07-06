import CartList from "./CartList";

const ItemCart = () => {
  return (
    <div className=" w-full flex flex-col">
      <div className=" flex justify-between items-center border-b border-black/20 py-4">
        <h1 className=" text-3xl font-bold">Cart</h1>
        <p className=" text-2xl">(1)</p>
      </div>
      <CartList />
    </div>
  );
};

export default ItemCart;
