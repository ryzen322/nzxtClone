import ItemsList from "./ItemsList";
import HeadingH1 from "../../../UI/HeadingH1";

const Items = ({
  id,
  itemArray = [],
  referrences,
  partsName,
  itemPartsName,
}) => {
  const sliceName =
    partsName[0].toUpperCase() + partsName.slice(1, partsName.length);

  return (
    <div ref={referrences} className=" flex flex-col gap-2 ">
      <div className=" flex justify-between items-center ">
        <HeadingH1>{sliceName}</HeadingH1>
      </div>

      <ul className=" flex flex-col gap-2 w-full">
        {itemArray.map((item) => (
          <ItemsList
            key={item.id}
            partsName={itemPartsName}
            images={item.images}
            name={item.name}
            size={item.size}
            information={item.information}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Items;
