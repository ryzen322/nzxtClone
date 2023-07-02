import { useState } from "react";
import HeadingH1 from "../../UI/HeadingH1";
import CaseListItem from "./CaseListItem";

const itemCase = [
  {
    id: 1,
    images:
      "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2F6gKiRO.png&w=96&q=75",
    name: "NZXT H5 Flow",
    size: "Mid-Tower",
  },
  {
    id: 2,
    images:
      "https://nzxt.com/_next/image?url=https%3A%2F%2Fnzxt-web-assets-dev.s3-us-west-2.amazonaws.com%2Fapp%2Fstorage%2Fcache%2Fdata%2Fki59W8.png&w=96&q=75",
    name: "NZXT H510i",
    size: "Mid-Tower",
  },
  {
    id: 3,
    images:
      "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FHnV8LD.png&w=96&q=75",
    name: "H5 Flow RGB",
    size: "Mid-Tower",
  },
  {
    id: 4,
    images:
      "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FzHNxoS.png&w=96&q=75",
    name: "NZXT H7",
    size: "Mid-Tower",
  },
  {
    id: 5,
    images:
      "https://nzxt.com/_next/image?url=https%3A%2F%2Fcdn.letsbld.com%2Fapp%2Fstorage%2Fcache%2Fdata%2FTLfIae.png&w=96&q=75",
    name: "NZXT H7 Flow",
    size: "Mid-Tower",
  },
];

const CaseList = ({ caseRef }) => {
  const [list, setList] = useState(itemCase);
  const [filterList, setFilterList] = useState("");

  const filterOnchange = (e) => {
    setFilterList(e.target.value);
  };

  const filteredList = list.filter((item) => item.name.includes(filterList));

  return (
    <div ref={caseRef} className=" flex flex-col gap-2 ">
      <div className=" flex justify-between items-center">
        <HeadingH1>Cases</HeadingH1>
        <select
          name=""
          id=""
          className=" bg-[#313235] px-8 py-2  rounded-md text-white cursor-pointer"
          onChange={filterOnchange}
          value={filterList}
        >
          {list.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <ul className=" flex flex-col gap-2 w-full">
        {filteredList.map((item) => (
          <CaseListItem
            key={item.id}
            images={item.images}
            name={item.name}
            size={item.size}
          />
        ))}
      </ul>
    </div>
  );
};

export default CaseList;
