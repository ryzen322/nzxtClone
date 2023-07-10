import CartPheripheralsItems from "./CartPheripheralsItems";

const CartPheripherals = () => {
  return (
    <section className=" flex flex-col mt-[7rem] gap-8 col-span-2 lg:mt-[1rem] lg:col-span-1">
      <button className=" flex flex-col items-center gap-2">
        <img
          className=" max-h-[25px] "
          src={`https://nzxt.com/logo/affirm-logo.svg`}
          alt="nzxt logo"
        />
        <h1 className=" font-bold text-[20px]">Pay Later with Affirm</h1>
        <p className=" max-w-[24rem] font-[400] leading-5">{`Buy now, pay over time. Quick and easy. No hidden fees. Select "Affirm montly payments" during checkout.`}</p>
      </button>
      <div className=" flex flex-col px-6 gap-3">
        <h1 className=" font-bold text-2xl">Summary</h1>

        <div className=" flex justify-between items-center text-[20px] py-4 border-b border-stone-600/30">
          <h1 className=" font-medium">Subtotal</h1>
          <p>$1,366.91</p>
        </div>
        <div className=" flex justify-between items-center font-semibold">
          <h1>Taxes</h1>
          <h1>Calculated at checkout</h1>
        </div>
        <div className=" flex justify-between items-center font-semibold">
          <h1>Estimated shipping</h1>
          <h1>Calculated at checkout</h1>
        </div>
      </div>
      <div className=" flex items-center flex-col justify-center gap-2">
        <h1>
          As low as $124/mo with affirm.
          <span className=" text-blue-600">Learn more</span>
        </h1>
        <button className=" bg-[#5E0BCB] text-white/80 w-full py-2 rounded-md text-[18px] font-bold">
          Proceed to Checkout
        </button>
      </div>
      <h1 className=" italic px-8">
        New and/or refurbished products may process and ship at different times.
      </h1>
      <CartPheripheralsItems />
    </section>
  );
};

export default CartPheripherals;
