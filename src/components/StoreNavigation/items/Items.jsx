import ItemsList from "./ItemsList";
import HeadingH1 from "../../../UI/HeadingH1";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../UI/Loading";
import { fetchCartData } from "../../../store/partsSlice";
import { useEffect } from "react";

const Items = ({ referrences, partsName = "", itemPartsName = "" }) => {
  const dispatch = useDispatch();
  const sliceName =
    partsName[0].toUpperCase() + partsName.slice(1, partsName.length);

  const { pcParts, loading } = useSelector(({ pcParts }) => pcParts);

  const item = pcParts[`${itemPartsName}`];
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <div ref={referrences} className=" flex flex-col gap-2 ">
      <div className=" flex justify-between items-center ">
        <HeadingH1>{sliceName}</HeadingH1>
      </div>

      <ul className=" flex flex-col gap-2 w-full">
        {loading ? (
          <Loading />
        ) : (
          item?.map((item) => (
            <ItemsList
              key={item.id}
              partsName={itemPartsName}
              images={item.images}
              name={item.name}
              size={item.size}
              information={item.information}
              price={item.price}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Items;
