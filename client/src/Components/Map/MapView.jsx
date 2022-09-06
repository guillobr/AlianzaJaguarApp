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



// export default function MapView(){

//    const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(getSighting())
//   }, [])

//   const sightings = useSelector((state) => state.sighting)

//   console.log('S;',sightings)

//   const [state, setState] = useState({
//     long: 0,
//     lat: 0,
//   });
 
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//          console.log(position);
//         setState({
//           currentLocation: { 
//             lat: position.coords.latitude,  
//             lng: position.coords.longitude},
//           zoom: 13,
//           data,
          
//         });
//       },
//       function (error) {
//         console.error("Error Code = " + error.code + " - " + error.message);
//       },
//       {
//         enableHighAccuracy: true,
//       }
//     );
//   }, []);
//   console.log('state:',state)

//     // const [state, setState] = useState({
//     //     currentLocation: { lat: 52.52437, lng: 13.41053 },
//     //     zoom: 13,
//     //     data,
//     //   });
    
//     //   const location = useLocation();
//     //   const navigate = useNavigate();

//     //   console.log('location',location)
     
    
//     //   useEffect(() => {
//     //     if (location.state.latitude && location.state.longitude) {
//     //       const currentLocation = {
//     //         lat: location.state.latitude,
//     //         lng: location.state.longitude,
//     //       };
//     //       console.log('state',state);
//     //       setState({
//     //         ...state,
//     //         data: {
//     //           venues: state.data.venues.concat({
//     //             name: "new",
//     //             geometry: [currentLocation.lat, currentLocation.lng],
//     //           }),
//     //         },
//     //         currentLocation,
//     //       });
//     //       navigate('/mapview' , {replace:true})
//     //     //   history.replace({
//     //     //     pathname: "/map",
//     //     //     state: {},
//     //     //   });
//     //     }
//     //   }, [location]);
    
//       return (
//         <MapContainer center={state.currentLocation} zoom={13} >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Markers sighting={sightings} />
//         </MapContainer>
//       );
//     };

export default function MapView(){

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSighting())
  }, [])


  const sightings = useSelector((state) => state.sighting)
  console.log('sig:',sightings)
  const ubicacion = sightings.map(s=>{
    return{
      lat:s.geometry[0],
      lng:s.geometry[1]
    }
  })
  console.log('ubica:',ubicacion)


  const [state, setState] = useState({
       currentLocation:{lat: '-22.59258606150612',lng:'-64.38119939044135'},
       zoom: 7
      });

//  const [actual ,setActual] = useState({
//   latitude:0,
//   longitude:0
//  })

      useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            setState({
              currentLocation:{lat: position.coords.latitude,lng:position.coords.longitude},
              zoom: 13
            })
          },
          function (error) {
            console.error("Error Code = " + error.code + " - " + error.message);
          },
          {
            enableHighAccuracy: true,
          }
        );
      },[]);
     
  
  return(
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
       <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers data={sightings}/>
    </MapContainer>
  )
}