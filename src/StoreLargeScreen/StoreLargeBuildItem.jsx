import React, { useState } from "react";
import StoreLargeBuild from "./StoreLargeBuild";
import StoreLargeItems from "./StoreLargeItems";

const StoreLargeBuildItem = ({ pcPartsArray, itemValuesData }) => {
  return (
    <div className=" flex items-center h-[47.5vh]">
      <StoreLargeBuild />
      <StoreLargeItems
        pcPartsArray={pcPartsArray}
        itemValuesData={itemValuesData}
      />
    </div>
  );
};

export default StoreLargeBuildItem;
