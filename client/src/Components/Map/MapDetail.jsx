import React from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import Markers from "./Markers";
import data from '../../img/data.json'
import { useState } from "react";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSighting } from "../../actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


export default function MapDetail(){

    const id = useParams().id
    const allSighting = useSelector(state=>state.sighting)
    const sightingDetail = allSighting.filter(s=>s._id===id)[0]
    console.log('detalles:',sightingDetail)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSighting())
  }, [])


  
//   const ubicacion = sightingDetail.map(s=>{
//     return{
//       lat:s.geometry[0],
//       lng:s.geometry[1]
//     }
//   })
  


  const [state, setState] = useState({
       currentLocation:{lat: sightingDetail.geo[0],lng: sightingDetail.geo[1]},
       zoom: 7
      });

//  const [actual ,setActual] = useState({
//   latitude:0,
//   longitude:0
//  })

    //   useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //       function (position) {
    //         setState({
    //           currentLocation:{lat: position.coords.latitude,lng:position.coords.longitude},
    //           zoom: 13
    //         })
    //       },
    //       function (error) {
    //         console.error("Error Code = " + error.code + " - " + error.message);
    //       },
    //       {
    //         enableHighAccuracy: true,
    //       }
    //     );
    //   },[]);
     
  
  return(
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
       <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers data={sightingDetail}/>
    </MapContainer>
  )
}