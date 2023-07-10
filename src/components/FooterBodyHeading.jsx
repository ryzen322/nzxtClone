import FooterIcons from "./FooterIcons";

const FooterBodyHeading = () => {
  return (
    <div className=" grid grid-cols-3 gap-4 md:flex">
      <div className="hidden md:block">
        <FooterIcons />
      </div>
      <div className=" flex flex-col gap-3 md:ml-auto">
        <label htmlFor="" className=" text-stone-300 text-xs">
          LANGUAGE
        </label>
        <select name="" id="" className=" bg-[#1A1C1E]">
          <option value="English">English</option>
        </select>
      </div>
      <div className=" flex flex-col gap-3 2">
        <label htmlFor="" className=" text-stone-300 text-xs">
          LANGUAGE
        </label>
        <select name="" id="" className=" bg-[#1A1C1E]">
          <optgroup label="North America">
            <option value="2">United States</option>
            <option value="3">Canada</option>
          </optgroup>
          <optgroup label="Europe">
            <option value="5">Austria</option>
            <option value="6">Belgium</option>
            <option value="7">France</option>
            <option value="5">Italy</option>
            <option value="6">Germany</option>
            <option value="7">Luxembourg</option>
            <option value="6">Netherlands</option>
            <option value="7">United Kingdom</option>
            <option value="7">Spain</option>
          </optgroup>
          <optgroup label="Ocienia">
            <option value="5">Australia</option>
            <option value="6">New Zealand</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default FooterBodyHeading;
