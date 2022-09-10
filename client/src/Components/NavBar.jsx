import React from "react";
import LogInButton from "./LogIn";
import LogOutButton from "./LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./User/Profile";
import { Admin } from "./Admin/Admin";
import { Link } from "react-router-dom";
import logo from "../img/Logo.jpg"
import styles from "../Styles/navbar.module.css"
import arg from "../img/ARG1.png"
import bol from "../img/BOL1.png"
import par from "../img/PAR1.png"
import titulo from "../img/LogoTitulo.png"


export default function NavBar(){
  const {isAuthenticated} = useAuth0()
  const toggleButton = document.getElementsByClassName('toggle')[0]
  const containerLink = document.getElementsByClassName('containerLink')[0]

  // function ontoggleButton.addEventListener('click',()=>{
  //   containerLink.classList.toggle('active')
  // })

  return(
    <div className={styles.c}>
    <div className={styles.container} >
        {/* <h2 className={styles.title} > Alianza TriNacional Jaguar</h2> */}
        <img className={styles.titlePic} src={titulo} alt=''/>
        <a href='a' className={styles.toggle} >
          <span  className={styles.bar} ></span>
          <span  className={styles.bar} ></span>
          <span  className={styles.bar} ></span>
        </a>
        <div className={styles.containerLink}>
        <Link to="/"className={styles.link}>
          INICIO
        </Link>
        <Link to="/aboutUs"className={styles.link}>
          QUIENES SOMOS
        </Link>
        <Link to="/aboutUs"className={styles.link}>
          PROYECTOS
        </Link>
        <Link to="/aboutUs"className={styles.link}>
          DONAR
        </Link>
        <Link to="/aboutUs"className={styles.link}>
          CONTACTO
        </Link>
        </div>
        <div  className={styles.imgcontainerALL}>
          <div className={styles.imgcont}>
            <img src={arg} alt='' className={styles.img}/>
          </div>
          <div className={styles.imgcont}>
            <img src={bol} alt='' className={styles.imgBol}/>
          </div>
          <div className={styles.imgcont}>
            <img src={par} alt='' className={styles.imgPar}/>
          </div>
          
        </div>
      </div>
      <div className={styles.cline}>
      <hr className={styles.line}></hr> 
      </div>    
    </div>
  )
}
