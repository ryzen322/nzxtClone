import StoreLargeBuild from "./StoreLargeBuild";
import StoreLargeItems from "./StoreLargeItems";

const StoreLargeBuildItem = ({ pcPartsArray, itemValuesData }) => {
  return (
    <div className=" flex items-center h-[47.5vh] 2xl:w-[240rem] px-4 2xl:h-full justify-center 2xl:gap-4 2xl:relative">
      <div className=" hidden 2xl:flex items-center absolute top-[3.4rem] left-0 w-full h-[4rem] px-4">
        <h1 className=" text-white text-4xl font-semibold">H5 Flow Build</h1>
      </div>
      <StoreLargeBuild />
      <StoreLargeItems
        pcPartsArray={pcPartsArray}
        itemValuesData={itemValuesData}
      />
    </div>
  );
};

export default StoreLargeBuildItem;
