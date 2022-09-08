import React from "react";
import { Marker } from 'react-leaflet/Marker'
import {IconLocation} from './IconLocation'
import MarkerPopup from "./MarkerPopUp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSighting } from "../../actions";
import LocationOnIcon from '@mui/icons-material/LocationOn';



export default function Markers(props){

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSighting())
  }, [])

  const sightings = useSelector((state) => state.sighting)
  console.log('sig:',sightings)

  const totalU = []

  const ubicacion = sightings.map(s=>{
    return (
      {
      id:s._id,
      lat:s.geometry[0],
      lng:s.geometry[1]
    })
  })
  console.log('u,',ubicacion)

  const ubicacionManual = sightings.map(s=>{
    return{
      id:s._id,
      lat:s.geo[0],
      lng:s.geo[1]
    }
  })
  console.log('umanual,',ubicacionManual)

  useEffect(() => {
    ubicacion.concat(ubicacionManual)
  }, [ubicacion])

  // useEffect(() => {
  //   totalU.concat(ubicacionManual)
  // }, [totalU])


  console.log('Total:',ubicacion)
 
   
    const markers = ubicacion.map((u, _id) => (
      <Marker key={_id} position={u} icon={IconLocation}>
        <MarkerPopup data={u._id} />
      </Marker>
    ));
    return <>{markers}</>;
  };
