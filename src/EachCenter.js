import React from "react";
import { useParams } from "react-router-dom";
import DetailedCenterCard from "./DetailedCenterCard";

const EachCenter = ({ availableVacCentersSessions }) => {
  let { eachCenter } = useParams();
  return (
    <div>
      {availableVacCentersSessions
        .filter((data, index) => data.session_id === eachCenter)
        .map(({session_id, ...otherProps}) => (
            <DetailedCenterCard key={session_id} {...otherProps} />
        ))}
    </div>
  );
};

export default EachCenter;
