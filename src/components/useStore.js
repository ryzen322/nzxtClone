import { useMemo } from "react";
import { shoppingCart } from "../store/storeSlice";
import { useSelector } from "react-redux";

const useStoreValue = () => {
  const { store } = useSelector(shoppingCart);

  const pcPartsArray = [];

  for (const item of store) {
    pcPartsArray.push(item.case);
    pcPartsArray.push(item.cpu);
    pcPartsArray.push(item.gpu);
    pcPartsArray.push(item.motherboard);
    pcPartsArray.push(item.ram);
    pcPartsArray.push(item.storage);
    pcPartsArray.push(item.cooling);
    pcPartsArray.push(item.powersupply);
  }

  const totalValue = useMemo(() => {
    return pcPartsArray
      .map((item) => item.total)
      .reduce((value, cur) => value + cur, 0);
  }, [pcPartsArray]);

  const currency = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  });

  const price = currency.format(totalValue);

  return price;
};
export default useStoreValue;
