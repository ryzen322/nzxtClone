import Footer from "../pages/Footer";
import CardList from "./CardList";
import CartPheripherals from "./CartPheripherals";
import ItemCart from "./ItemCart";

const CartParts = () => {
  return (
    <>
      <div className=" container mx-auto px-4 pt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ItemCart />
        <CartPheripherals />
        <CardList />
      </div>
      <Footer />
    </>
  );
};

export default CartParts;
