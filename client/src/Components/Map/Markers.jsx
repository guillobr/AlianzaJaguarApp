import React from "react";
import { Marker } from 'react-leaflet/Marker'
import {IconLocation} from './IconLocation'
import MarkerPopup from "./MarkerPopUp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getSighting } from "../../actions";



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
      lat:s.geometry[0],
      lng:s.geometry[1]
    })
  })

  const ubicacionManual = sightings.map(s=>{
    return{
      lat:s.geo[0],
      lng:s.geo[1]
    }
  })
  console.log('umanual,',ubicacionManual)

  useEffect(() => {
    totalU.push(ubicacion)
  }, [ubicacion])

  useEffect(() => {
    totalU.push(ubicacionManual)
  }, [ubicacionManual])


  console.log('T:',totalU)
 
   
    const markers = sightings.map((s, _id) => (
      <Marker key={_id} position={s.geometry} icon={IconLocation}>
        <MarkerPopup data={s._id} />
      </Marker>
    ));
    return <>{markers}</>;
  };
