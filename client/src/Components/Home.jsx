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
import fondo from "../img/fondo.jpg"
import BottomBar from './BottomBar'

export default function Home(){
    const dispatch = useDispatch()
    const allSighting = useSelector((state) => state.sighting)
    const usuarios= useSelector(state=> state.users)
    const {isAuthenticated} = useAuth0()
    const usuario = useSelector((state) => state.userLogged)


    return (
        <div className={styles.home}>
        
          
          {usuario.length?
            <div>
             
              <div>
            <Link className={styles.link} to='/admin'>
            PANEL DE ADMINISTRADOR
            </Link> 
            </div>
            </div>
            :''}
      
           <Link className={styles.link} to="/avistaje">
            AVISTAJE
            </Link>
            <Link className={styles.link} to="/poaching">
            TRAFICO
            </Link>
             
         
        </div>
      ); 
}