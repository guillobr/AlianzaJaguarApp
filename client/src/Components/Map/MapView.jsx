import React from "react";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import Markers from "./Markers";
import data from '../../img/data.json'
import { useState } from "react";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css'
import { useLocation, useNavigate } from "react-router-dom";


export default function MapView(props){

    const [state, setState] = useState({
        currentLocation: { lat: 52.52437, lng: 13.41053 },
        zoom: 13,
        data,
      });
    
      const location = useLocation();
      const navigate = useNavigate();

      console.log('PP:',props)
      console.log('lo:',location.state.latitude)
    
      useEffect(() => {
        if (location.state.latitude && location.state.longitude) {
          const currentLocation = {
            lat: location.state.latitude,
            lng: location.state.longitude,
          };
          console.log(state);
          setState({
            ...state,
            data: {
              venues: state.data.venues.concat({
                name: "new",
                geometry: [currentLocation.lat, currentLocation.lng],
              }),
            },
            currentLocation,
          });
          navigate('/mapview' , {replace:true})
        //   history.replace({
        //     pathname: "/map",
        //     state: {},
        //   });
        }
      }, [location]);
    
      return (
        <MapContainer center={state.currentLocation} zoom={state.zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers venues={state.data.venues} />
        </MapContainer>
      );
    };