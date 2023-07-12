import CheckOutArrayList from "./CheckOutArrayList";

const CheckOutItem = ({ showList }) => {
  return (
    <div
      className={` w-full ${
        showList ? "h-[72rem]" : "h-0"
      }  transition-all  delay-75 ease-linear overflow-hidden mt-6`}
    >
      <CheckOutArrayList />
    </div>
  );
};

export default CheckOutItem;
