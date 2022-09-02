import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//import styles from '../../Styles/admin.module.css'
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

  // useEffect(() => {
  //   dispatch(get(getAdminQuotes))
  // })


//   useEffect(() => {
//     scroll.scrollToTop()
//   }, [])

  return (
    <div>
      <div >
        {isAuthenticated?<>
              {/* <Profile/> */}
              {/* <Link to="/admin">
              Administrador
              </Link> */}
              
              <LogOutButton/>
              </>:<LogInButton/>}
        </div>
            {usuario.length?
            <div>
              <h1>Bienvenido: {usuario.nickname}</h1>
              <div>
            <Link to='/sightingData'>
            <button>Avistaje</button>
            </Link> 
            </div>
            <div>
            <Link to='/trafficData'>
            <button>Trafico</button>
        </Link> 
            </div>
            </div>
            :''}
      <div>

      <Link to='/'>
            <button>Home</button>
            </Link> 
        

      </div>
    </div>
  )
}
