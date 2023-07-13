import { useState } from "react";
import Img from "../../UI/Img";
import { BsCart2, BsPaypal } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import CheckOutItem from "./CheckOutItem";
import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { SiAmazon } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import CheckOutForm from "./CheckOutForm";
import CheckOutArrayList from "./CheckOutArrayList";

const CheckOutMain = () => {
  const [showList, setShowList] = useState(false);

  const showListData = () => {
    setShowList((state) => !state);
  };

  return (
    <>
      <div className=" container mx-auto px-2 flex gap-[5rem] 2xl:px-[10rem]">
        <div className=" col-span-2 flex flex-col lg:col-span-1 lg:w-[60%]">
          <div className=" w-[15rem] h-auto">
            <Link to="/">
              <Img
                className=" w-full h-full object-contain
            "
                src={`https://cdn.shopify.com/s/files/1/1986/9305/files/new-logo-for-emails.png?467`}
                alt="Logo NZXT"
                title="Logo NZXT"
              />
            </Link>
          </div>
          <div className=" flex flex-col w-full h-auto mt-10 lg:hidden">
            <div className=" flex items-center justify-between ">
              <div
                className=" flex items-center text-[#1990c6] gap-2 cursor-pointer "
                onClick={showListData}
              >
                <BsCart2 className=" text-lg" />
                <h1 className=" text-[15px]">
                  {showList ? "Hide order summary" : "Show order summary"}
                </h1>
                <BiChevronDown
                  className={` ${
                    !showList ? "" : " rotate-180"
                  } transition-all`}
                />
              </div>
              <div className=" flex flex-col leading-5">
                <h1 className=" text-[#717171] text-xs ml-auto line-through">
                  $1.231,91
                </h1>
                <h1 className=" text-lg">$1,122,91</h1>
              </div>
            </div>
            <CheckOutItem showList={showList} />
          </div>
          <div className="flex items-center lg:mt-3">
            <Link
              to="../cart"
              className=" text-[#1990c6] text-[13px] flex items-center gap-1"
            >
              Return to Cart
              <MdNavigateNext className=" text-[#717171] text-lg" />
            </Link>
            <h1 className=" text-[13px] flex items-center gap-1">
              Information
              <MdNavigateNext className=" text-[#717171] text-lg" />
            </h1>
            <h1 className=" text-[13px] text-[#717171] flex items-center gap-1">
              Shipping
              <MdNavigateNext className=" text-[#717171] text-lg" />
            </h1>
            <h1 className=" text-[13px] text-[#717171] flex items-center gap-1">
              Payment
              <MdNavigateNext className=" text-[#717171] text-lg" />
            </h1>
          </div>
          <li className=" flex items-center justify-center py-4 rounded-md gap-1">
            <h1>Express Checkout</h1>
          </li>
          <ul className=" w-full grid grid-cols-1 gap-2 mt-2 px-5 lg:grid-cols-4">
            <li className=" bg-[#007AFF] flex items-center justify-center py-4 rounded-md gap-1 lg:py-2">
              <AiFillApple className=" text-white" />
              <h1 className=" font-bold text-white">Pay</h1>
            </li>
            <li className=" bg-[#FFC439] flex items-center justify-center py-4 rounded-md gap-1 lg:py-2">
              <BsPaypal />
              <h1 className=" font-bold text-[#009CDE]">PayPal</h1>
            </li>
            <li className=" bg-[#FAD676] flex items-center justify-center py-4 rounded-md gap-1 lg:py-2">
              <SiAmazon className=" block lg:hidden" />
              <h1 className=" font-bold text-[#009CDE]">Amazon Pay</h1>
            </li>
            <li className=" bg-black flex items-center justify-center py-4 rounded-md gap-1 lg:py-2">
              <FcGoogle />
              <h1 className=" font-bold text-white">Pay</h1>
            </li>
          </ul>
          <CheckOutForm />
        </div>
        <div className=" hidden lg:block">
          <CheckOutArrayList />
        </div>
      </div>
      <div className="container mx-auto mt-10 mb-4 px-4 sm:px-0 2xl:px-[10rem]">
        <p className=" text-[#545454] text-[14px] ml-auto">
          All rights reserved NZXT
        </p>
      </div>
    </>
  );
};

export default CheckOutMain;
