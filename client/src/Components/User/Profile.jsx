import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function Profile(){

    const{user, isAuthenticated, isLoading}= useAuth0()

    if (isLoading){
        return    <div> Loading...</div>
    }

    return(
        isAuthenticated &&(
            <div>
                <h1>Perfil</h1>
                <img src={user.picture} alt ={user.name}></img>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            
            </div>
    )

    )

}