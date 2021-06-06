import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchSlots from "./searchSlots";
import EachCenter from "./EachCenter";

export default function App() {
  const [vacCenters, setVacCenters] = useState([]);
  const [availableVacCentersSessions, setAvailableVacCentersSessions] =
    useState([]);
  const [cuurentDistrictName, setCuurentDistrictName] = useState("");

  const availableVacCenters = [];
  const arrayData = [];

  const handleChange = (e) => {
    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${e.target.value}&date=06-06-2021`
    )
      .then((res) => res.json())
      .then((data) => {
        data.centers.map((center) => arrayData.push(center));
        // console.log("arrayData:", arrayData);
        setVacCenters(arrayData);
      })
      .catch((err) => console.log(err));

    e = document.getElementById("districts");
    var districtName = e.options[e.selectedIndex].text;
    setCuurentDistrictName(districtName);
    // console.log("name", districtName);
  };

  useEffect(() => {
    vacCenters.map((center) => {
      center.sessions.map((avalSession, indexNumber) => {
        if (
          avalSession.min_age_limit === 18 &&
          avalSession.available_capacity_dose1 > 0
        ) {
          const availableVacCenterData = {
            center_id: `${center.center_id}`,
            address: `${center.address}`,
            district_name: `${center.district_name}`,
            name: `${center.name}`,
            pincode: `${center.pincode}`,
            fee_type: `${center.fee_type}`,
            vaccine: `${avalSession.vaccine}`,
            date: `${avalSession.date}`,
            slots: `${avalSession.slots}`,
            available_capacity: `${avalSession.available_capacity}`,
            available_capacity_dose1: `${avalSession.available_capacity_dose1}`,
            available_capacity_dose2: `${avalSession.available_capacity_dose2}`,
            session_id: `${avalSession.session_id}`,
            min_age_limit: `${avalSession.min_age_limit}`,
          };
          // console.log("availableVacCenterData", availableVacCenterData);

          availableVacCenters.push(availableVacCenterData);
        }
      });
    });
    setAvailableVacCentersSessions(availableVacCenters);
  }, [vacCenters]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchSlots
            availableVacCentersSessions={availableVacCentersSessions}
            handleChange={handleChange}
            cuurentDistrictName={cuurentDistrictName}
          />
        </Route>
        <Route exact path="/:eachCenter">
          <EachCenter
            availableVacCentersSessions={availableVacCentersSessions}
          />
        </Route>
      </Switch>
    </Router>
  );
}
