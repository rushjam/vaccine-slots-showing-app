import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({
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
  session_id,
}) => {
  return (
    <Link to={`/${session_id}`}>
      <div className="mb-5 bg-white p-3 rounded-lg flex flex-col shadow-lg hover:shadow-xl transform transition ease-in-out duration-300 hover:scale-105">
        <div className="grid justify-between">
          <div className="mb-1">
            <p className="text-xl font-bold break-all text-[rgba(32,26,162,.8666666666666667)]">
              {name}
            </p>
          </div>
          <div>
            <p className="text-sm text-[rgba(32,26,162,.6)]">{date}</p>
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-[#f6f6f7] my-3"></div>
        <div className="flex justify-between px-4">
          <div className="flex flex-col items-center">
            <div className="my-2">
              <p className="uppercase text-xs font-extrabold text-[rgba(182,133,77,.6)]">
                Total Slots
              </p>
            </div>
            <div className="text-2xl font-bold text-[#b6854d] my-2">
              {available_capacity}
            </div>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="my-2">
              <p className="text-lg font-semibold text-[#ffc107ce]">
                {vaccine}
              </p>
            </div>
            <div className="my-2">
              <p
                className={` px-2 text-sm rounded-md ${
                  fee_type === "Free"
                    ? "bg-[#ddffe8] text-[#28a745] "
                    : "bg-[#fdf2f2] text-[#e23028]"
                }`}
              >
                {fee_type}
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
