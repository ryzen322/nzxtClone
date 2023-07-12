import { useState } from "react";
import CheckOutInput from "./CheckOutInput";
import { Link } from "react-router-dom";

const CheckOutForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setsetRegion] = useState("");
  const [province, setProvince] = useState("");

  return (
    <div className=" w-ful mt-12">
      <p className=" text-center uppercase text-sm text-[#717171]  ">or</p>
      <form action="" className=" mt-4 flex flex-col">
        <div className=" grid grid-cols-2">
          <h1 className=" text-lg font-medium">Contact</h1>
          <p className=" text-[#545454] text-[14px] ml-auto">
            Already have an Account?
            <span className=" text-[#1990c6] "> Log in</span>
          </p>
        </div>

        <CheckOutInput name="Email" inputValue={email} setInput={setEmail} />

        <div className=" mt-2 flex items-center gap-2 px-4">
          <input type="checkbox" />
          <label
            htmlFor=""
            className=" text-[#545454] text-[14px] cursor-pointer"
          >
            Email me with news and offers
          </label>
        </div>

        <h1 className=" mt-6 text-lg">Shipping Address</h1>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-4">
          <CheckOutInput
            name="Country"
            inputValue={region}
            setInput={setsetRegion}
            className=" lg:col-span-full"
          />
          <CheckOutInput
            name="First Name"
            inputValue={firstName}
            setInput={setFirstName}
            className=" lg:col-span-2"
          />
          <CheckOutInput
            name="Last Name"
            inputValue={lastName}
            setInput={setLastName}
            className=""
          />
          <CheckOutInput
            name="Company Optional"
            inputValue={company}
            setInput={setCompany}
            className=" lg:col-span-full"
          />

          <CheckOutInput
            name="address"
            inputValue={address}
            setInput={setAddress}
            className=" lg:col-span-full"
          />
          <CheckOutInput
            name="address"
            inputValue={address}
            setInput={setAddress}
            className=" lg:col-span-full"
          />
          <CheckOutInput
            name="Apartment, suite, etc, (optional)"
            inputValue={apartment}
            setInput={setApartment}
            className=" lg:col-span-full"
          />
          <CheckOutInput
            name="City"
            inputValue={city}
            setInput={setCity}
            className=""
          />
          <CheckOutInput
            name="Province"
            inputValue={province}
            setInput={setProvince}
            className=""
          />
          <CheckOutInput
            name="Postal Code"
            inputValue={postalCode}
            setInput={setPostalCode}
            className=""
          />
          <CheckOutInput
            name="Phone"
            inputValue={phone}
            setInput={setPhone}
            className=" lg:col-span-full"
          />
        </div>
      </form>
      <div className="flex flex-col lg:flex-row-reverse gap-6">
        <button className=" my-4 bg-[#1990C6] w-full rounded-md text-white py-5">
          continue to shipping
        </button>
        <Link
          to="../cart"
          className=" text-[#1990c6] text-[13px] flex items-center gap-1 shrink-0"
        >
          Return to Cart
        </Link>
      </div>
    </div>
  );
};

export default CheckOutForm;
