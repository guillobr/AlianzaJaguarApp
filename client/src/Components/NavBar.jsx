import React from "react";
import LogInButton from "./LogIn";
import LogOutButton from "./LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./User/Profile";
import { Admin } from "./Admin/Admin";
import { Link } from "react-router-dom";
import logo from "../img/Logo.jpg"
import styles from "../Styles/navbar.module.css"




export default function NavBar(){
  const {isAuthenticated} = useAuth0()

  return(
    <div>
      <div>
        
      <img src={logo} alt='' className={styles.img}/>
        <div className={styles.log}>
        {isAuthenticated?<>
              {/* <Profile/> */}
              <Link to="/admin">
              Administrador
              </Link>
              <LogOutButton/>
              </>:<LogInButton/>}
        </div>
      </div>
    </div>
  )
}
