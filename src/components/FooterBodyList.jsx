import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterBodyList = ({ title, list = [] }) => {
  const [state, setState] = useState(false);

  const ShowList = () => {
    setState((prev) => !prev);
  };

  return (
    <div className=" flex flex-col">
      <button
        className=" flex justify-between items-center py-3 border-b border-white md:hidden"
        onClick={ShowList}
      >
        {title}
        <MdNavigateNext className={` text-[1.5rem] rotate-[90deg]`} />
      </button>
      <h1 className="hidden md:block">{title}</h1>
      <ul className=" mt-4 flex flex-col gap-4">
        {state &&
          list.map((item) => (
            <li
              key={item.id}
              className=" text-[#91919c] font-medium hover:text-white"
            >
              <Link>{item.text}</Link>
            </li>
          ))}
        {list.map((item) => (
          <li
            key={item.id}
            className="hidden md:block text-[#91919c] font-medium hover:text-white"
          >
            <Link>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBodyList;
