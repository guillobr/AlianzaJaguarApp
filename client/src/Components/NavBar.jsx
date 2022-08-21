import React from "react";
import LogInButton from "./LogIn";
import LogOutButton from "./LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./User/Profile";
import { Admin } from "./Admin/Admin";
import { Link } from "react-router-dom";



export default function NavBar(){
  const {isAuthenticated} = useAuth0()

  return(
    <div>
      <div>
      {isAuthenticated?<>
           {/* <Profile/> */}
           <Link to="/admin">
            Administrador
            </Link>
           <LogOutButton/>
           </>:<LogInButton/>}
      </div>
    </div>
  )
}
