import React from "react";
import LogInButton from "./LogIn";
import LogOutButton from "./LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./User/Profile";
import { Admin } from "./Admin/Admin";
import { Link } from "react-router-dom";
import logo from "../img/Logo.jpg"
import styles from "../Styles/navbar.module.css"
import arg from "../img/Flag_of_Argentina.png"
import bol from "../img/Bandera_de_Bolivia_(Estado).png"
import par from "../img/paraguay.png"




export default function NavBar(){
  const {isAuthenticated} = useAuth0()

  return(
    <div className={styles.c}>
    <div className={styles.container} >
        <h2 className={styles.title} > Alianza TriNacional Jaguar</h2>
        <Link to="/aboutUs"className={styles.link}>
          QUIENES SOMOS
        </Link>
        <div  className={styles.imgcontainer}>
          <img src={arg} alt='' className={styles.img}/>
          <img src={bol} alt='' className={styles.img}/>
          <img src={par} alt='' className={styles.img}/>
        </div>
      </div>
      <div className={styles.cline}>
      <hr className={styles.line}></hr> 
      </div>    
    </div>
  )
}
