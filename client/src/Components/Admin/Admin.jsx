import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
//import styles from '../../Styles/admin.module.css'
import { getAdminQuotes } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
//import { animateScroll as scroll, Element } from 'react-scroll'

export function Admin() {
  const dispatch = useDispatch()

  //const usuarios = useSelector(state=>state.users)
  const usuario = useSelector((state) => state.userLogged)
  //console.log('U:',usuarios)

  // useEffect(() => {
  //   dispatch(get(getAdminQuotes))
  // })


//   useEffect(() => {
//     scroll.scrollToTop()
//   }, [])

  return (
    <div>
      <div>
        <Link to='/sightingData'>
            <button>Avistaje</button>
        </Link> 
        <Link to='/trafficData'>
            <button>Trafico</button>
        </Link> 

      </div>
    </div>
  )
}
