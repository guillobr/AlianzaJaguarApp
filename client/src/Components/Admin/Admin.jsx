import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../Styles/admin.module.css'
import { getAdminQuotes } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
//import { animateScroll as scroll, Element } from 'react-scroll'
import LogInButton from '../LogIn'
import LogOutButton from '../LogOut'
import { useAuth0 } from "@auth0/auth0-react";

export function Admin() {
  const dispatch = useDispatch()
  const {isAuthenticated} = useAuth0()
//const usuarios = useSelector(state=>state.users)
  const usuario = useSelector((state) => state.userLogged)
  console.log('U:',usuario)



  return (
    <div className={styles.admin}>
      <div>
        {isAuthenticated?<>
              <LogOutButton/>
              </>:<LogInButton/>}
      </div>
      <div>
            {usuario.length?
            <div className={styles.linkContainers}>
              <div className={styles.linkCont} >
                <Link to='/sightingData' className={styles.link}>
                 REGISTRO DE AVISTAJES
                </Link> 
              </div>
              <div className={styles.linkCont} >
                <Link to='/trafficData' className={styles.link}>
                  REGISTRO DE TRAFICO
                </Link> 
              </div>      
            </div>
            :''}
             </div>
           <div>
             <Link to='/' className={styles.link}>
              HOME
            </Link> 
          </div>
    </div>
  )
}
