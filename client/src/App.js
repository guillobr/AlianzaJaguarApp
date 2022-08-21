import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { useSelector } from 'react-redux'
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSighting , postUser , getUsers} from './actions'
import Home from './Components/Home'
import Avistaje from './Components/Avistaje';
import NavBar from './Components/NavBar';
//import LandingPage from './Components/LandingPage'

//import LogInButton from './Components/LogIn'
//import AddQuote from './Components/Admin/Add/AddQuote'
//import Profile from './Components/User/Profile'
//import { useAuth0 } from '@auth0/auth0-react'
import { Admin } from './Components/Admin/Admin'
// import Add from './Components/Admin/Add/Add'
// import Put from './Components/Admin/User/Users'
// import Delete from './Components/Admin/Delete/Delete'
// import Users from './Components/Admin/User/Users'
// import AddAuthor from './Components/Admin/Add/AddAuthor'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
        <Route>
         <Route path='/' element={<Home />} />
         <Route path='/avistaje' element={<Avistaje />} />
         <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
