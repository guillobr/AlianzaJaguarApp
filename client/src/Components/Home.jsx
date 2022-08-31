import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSighting } from '../actions'
import styles from "../Styles/home.module.css"
import { Link , useLocation } from 'react-router-dom'
import LogInButton from './LogIn'
import LogOutButton from './LogOut'
import Profile from './User/Profile'
import { useAuth0 } from "@auth0/auth0-react";
import { Admin } from './Admin/Admin'

export default function Home(){
    const dispatch = useDispatch()
    const allSighting = useSelector((state) => state.sighting)
    const usuarios= useSelector(state=> state.users)
    const {isAuthenticated} = useAuth0()

    // const [state, setState] = useState({
    //   longitude: 0,
    //   latitude: 0,
    // });

    // useEffect(() => {
    //   navigator.geolocation.getCurrentPosition(
    //     function (position) {
    //        console.log(position);
    //       setState({
    //         longitude: position.coords.longitude,
    //         latitude: position.coords.latitude,
    //       });
    //     },
    //     function (error) {
    //       console.error("Error Code = " + error.code + " - " + error.message);
    //     },
    //     {
    //       enableHighAccuracy: true,
    //     }
    //   );
    // }, []);

    return (
        <div className={styles.home}>
          <header className={styles.headder}>
           <Link className={styles.link} to="/avistaje">
            AVISTAJE
            </Link>
            <Link className={styles.link} to="/poaching">
            TRAFICO
            </Link>
            {/* <h1>Geolocation</h1>
      <p>Latitude: {state.latitude}</p>
      <p>longitude: {state.longitude}</p>
      <Link
        to={{
          pathname: "/mapview",
          geo : state,
        }}
      >
        See marker
      </Link> */}
          </header>    
        </div>
      ); 
}