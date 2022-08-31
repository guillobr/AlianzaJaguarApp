import React from "react";
import { Marker } from 'react-leaflet/Marker'
import {IconLocation} from './IconLocation'
import MarkerPopup from "./MarkerPopUp";



export default function Markers(props){
    const { venues } = props;
    const markers = venues.map((venue, i) => (
      <Marker key={i} position={venue.geometry} icon={IconLocation}>
        <MarkerPopup data={venue} />
      </Marker>
    ));
    return <>{markers}</>;
  };
