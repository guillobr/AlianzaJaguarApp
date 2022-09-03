import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Styles/logout.module.css"

export default function LogOutButton(){
  const {logout} = useAuth0()

  return <button onClick={()=>logout({returnTo: window.location.origin})}  className={styles.link}>LOGOUT</button>

}