import React from "react";
import styles from "../Styles/bottom.module.css"
import logo from "../img/Logo.jpg"
import logoBlack from "../img/logoBlack.png"
import insta from "../img/insta.jpg"
import facebook from "../img/ade.jpg"
import { Instagram, Facebook, WhatsApp } from '@mui/icons-material'

export default function BottomBar(){

    return(
        <div className={styles.c}>
              
            <div>
                <hr className={styles.line}></hr> 
            </div>    
            <div className={styles.container}>
                <img src={logoBlack} alt='' className={styles.logoBlack}/>
                <div  className={styles.redes}>
                <div>
                <a href="https://www.instagram.com/" ><Instagram sx={{ fontSize: '32px', color: 'white' }} /></a>
                </div>
                <div>
                <a href="https://www.facebook.com/"><Facebook sx={{ fontSize: '32px', color: 'white' }} /></a>
                </div>
                <div>
                <a href="https://www.facebook.com/"> <WhatsApp sx={{ fontSize: '32px', color: 'white' }} /></a>
                </div>
                </div>
            </div>
        </div>
    )
}