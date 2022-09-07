import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from '../Styles/login.module.css'


export default function LogInButton(){

  const {loginWithRedirect} = useAuth0()

  return <button onClick={()=>loginWithRedirect()}  className={styles.btn} >LOGIN</button>


}