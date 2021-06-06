import React, {  useState } from "react";
import DistrictData from "./districtData.js";
import InfoCard from "./infoCard.js";

const SearchSlots = ({
  availableVacCentersSessions,
  cuurentDistrictName,
  handleChange,
}) => {
  const [districtData] = useState(DistrictData);

  return (
    <>
      <div className="w-11/12 mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-7xl pt-28">
        <div className="">
          <select
            className="rounded-lg shadow-lg lg:w-1/2 px-2 py-4 z-10 left-1/2 fixed top-6 transform -translate-x-1/2 focus-visible:border-none focus-visible:outline-none"
            id="districts"
            onChange={handleChange}
          >
            <option disabled selected value className="border-black">
              {" "}
              -- select your district --{" "}
            </option>
            {districtData.map(({ district_id, district_name }) => (
              <option key={district_id} value={district_id}>
                {district_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          {availableVacCentersSessions.length !== 0 ? (
            <div>
              <div className="district-name">
                <h1 className="text-3xl font-bold mb-4">
                  {cuurentDistrictName}
                </h1>
              </div>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {availableVacCentersSessions.map(
                  ({ session_id, ...otherProps }) => {
                    return (
                      <InfoCard
                        key={session_id}
                        session_id={session_id}
                        {...otherProps}
                      />
                    );
                  }
                )}
              </div>
            </div>
          ) : (
            <h1 className="text-xl font-bold">
              No vaccine slots available for 18+, please select different
              district
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchSlots;
