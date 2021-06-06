import React from "react";
import { Link } from "react-router-dom";

const DetailedCenterCard = ({
  address,
  available_capacity,
  available_capacity_dose1,
  available_capacity_dose2,
  date,
  district_name,
  name,
  pincode,
  slots,
  fee_type,
  vaccine,
}) => {
  return (
    <>
      <div className="w-11/12 mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-5xl mt-20 relative">
        <div className="vaccine_info bg-purple-500 text-white rounded-3xl p-5 pb-14 ">
          <div className="mb-8">
            <div className="vaccine_name flex align-middle justify-between ">
              <p className="font-bold text-2xl text-purple-900">{vaccine}</p>
              <p className="fee_type bg-purple-300 px-3 rounded-lg text-purple-900 font-bold mt-1">
                {fee_type}
              </p>
            </div>
            <div className="date"><p className="text-base font-bold text-[#d6c4ffd5]">{date}</p></div>
          </div>
          <div className="vaccine_dose_info md:grid md:grid-cols-2 md:pr-40">
            <div className="total_doses mb-3 flex flex-col ">
              <p className="text-[#d6c4ffd5] font-extrabold">Total</p>
              <p className="font-extrabold text-4xl">{available_capacity}</p>
            </div>
            <div className="flex justify-between">
              <div className="dose1_capacity">
                <p className="text-[#d6c4ffd5] font-extrabold">Dose 1</p>
                <p className="font-extrabold text-4xl">
                  {available_capacity_dose1}
                </p>
              </div>
              <div className="dose2_capacity pr-16 md:pr-0">
                <p className="text-[#d6c4ffd5] font-extrabold">Dose 2</p>
                <p className="font-extrabold text-4xl">
                  {available_capacity_dose2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact bg-white relative -top-10 rounded-3xl p-5 pb-10">
          <div className="district">
            <p className="font-bold text-2xl text-purple-500 mb-4">
              {district_name}
            </p>
          </div>
          <div>
            <div className="center_name mb-4">
              <span className=" font-bold text-[#303030]">
                Center Name
              </span>
              <p className="font-bold text-lg text-[#8383839d]">{name}</p>
            </div>
            <div className="center_address">
              <span className=" font-bold text-[#303030]">
                Address
              </span>
              <p className="font-bold text-lg text-[#8383839d]">{address}</p>
            </div>
            <div className="center_pincode font-bold text-lg text-[#8383839d]">
              {pincode}
            </div>
          </div>
        </div>
        <div className="text-right relative -top-4 right-2">
          <Link
            className="bg-purple-300 px-3 rounded-lg font-bold text-purple-900 py-1"
            to="/"
          >
            Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default DetailedCenterCard;
