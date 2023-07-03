import SummaryCard from "../UI/SummaryCard";
import StoreSummaryListItem from "./StoreSummaryListItem";

const StoreSummaryList = ({ item2 = [] }) => {
  return (
    <SummaryCard className={` px-4 py-8`}>
      {item2.map((data) => (
        <StoreSummaryListItem
          key={data.id}
          partName={data.partsName}
          pcParts={data.pcParts}
          quantity={data.quantity}
          price={data.price}
        />
      ))}
    </SummaryCard>
  );
};

export default StoreSummaryList;
