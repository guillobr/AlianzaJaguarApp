import React from "react";
import { Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const MarkerPopup = (props) => {
  const { data } = props;
  console.log('data:',data)

  // const id = useParams().id
  //   const navigate = useNavigate()
  //   const dispatch = useDispatch()


  //   const allSighting = useSelector(state=>state.sighting)

  //   const sightingDetail = allSighting.filter(s=>s._id===id)[0]
  
  return (
    <Popup>
      <Link to={`/sightingID/${data._id}`}>
          {data.name}
      </Link>
    </Popup>
  );
};

export default MarkerPopup;