const ComponentListItems = ({ partName, partsArray = [], Icon }) => {
  return (
    <div className=" flex flex-col">
      <h1 className=" font-bold text-[#dadae1] flex items-center gap-2">
        <Icon /> {partName}
      </h1>
      {partsArray.map((item) => (
        <div
          key={item.id}
          className=" text-[#dadae1] mt-2 w-full px-3 group cursor-pointer"
        >
          <h1 className=" font-bold group-hover:text-[#bb86fc]">
            {item.partsCode}
          </h1>
          <p className=" text-[11px] font-semibold leading-4">
            {item.partsName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ComponentListItems;
