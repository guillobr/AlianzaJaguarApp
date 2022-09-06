import React from "react";
import { Popup } from "react-leaflet";
import { Link } from "react-router-dom";

const MarkerPopup = (props) => {
  const { data } = props;
  console.log('data:',data)
  
  return (
    <Popup>
      <Link to={`/sightingID/${data}`}>
          {data}
      </Link>
    </Popup>
  );
};

export default MarkerPopup;