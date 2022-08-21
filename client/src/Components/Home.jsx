import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSighting } from '../actions'
//import Card from './Card'
//import NavBar from './NavBar'
//import Paginado from './Paginado'
import styles from "../Styles/home.module.css"
import { Link } from 'react-router-dom'
import LogInButton from './LogIn'
import LogOutButton from './LogOut'
import Profile from './User/Profile'
import { useAuth0 } from "@auth0/auth0-react";
import { Admin } from './Admin/Admin'




export default function Home(){
    const dispatch = useDispatch()
    const allSighting = useSelector((state) => state.sighting)
    const usuarios= useSelector(state=> state.users)
    console.log('usuarios:',usuarios)
    const {isAuthenticated} = useAuth0()


    // const [currentPage, setCurrentPage] = useState(1)
    // const [quotesPerPage, setbookPerPage] = useState(1)
    // const lastQuote = currentPage * quotesPerPage
    // const firstQuote = lastQuote - quotesPerPage
    // const currentQuotes = allQuotes.slice(firstQuote, lastQuote)
    
    // const paginado = (pageNumber) => {
    //   setCurrentPage(pageNumber)
    // }

function handleAvistaje(){

}

    return (
      
           
        <div className={styles.home}>
          <header className={styles.headder}>
            <img src='https://thumbs.dreamstime.com/b/jaguar-onca-del-panthera-aislado-43168559.jpg' className={styles.logo} alt="logo" />
            <p>
              ALIANZA BINACIONAL  JAGUARES
           </p>
           <Link className={styles.link} to="/avistaje">
            AVISTAJE
            </Link>
          
           <p>TRAFICO</p>

          

          </header>
          
        </div>
      );
    
}