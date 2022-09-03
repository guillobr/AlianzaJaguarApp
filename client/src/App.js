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
import { getSighting , postUser , getUsers , getPoaching} from './actions'
import Home from './Components/Home'
import Avistaje from './Components/Avistaje';
import Poaching from './Components/Poaching';
import NavBar from './Components/NavBar';
import ProtectedRoute from './Components/ProtectedRoute';
//import LogInButton from './Components/LogIn'
//import Profile from './Components/User/Profile'
import { useAuth0 } from '@auth0/auth0-react'
import { Admin } from './Components/Admin/Admin'
import SightingDetails from './Components/Admin/Avistaje/SightingDetails';
import SightingData from './Components/Admin/Avistaje/SightingData';
import TrafficData from './Components/Admin/Traffic/TrafficData';
import PutSighting from './Components/Admin/Avistaje/PutSighting';
import PutPoaching from './Components/Admin/Traffic/PutPoaching';
import PoachingDetails from './Components/Admin/Traffic/PoachingDetails';
import MapView from './Components/Map/MapView';
import AboutUs from './Components/AboutUs';
import BottomBar from './Components/BottomBar';


function App() {

  const dispatch = useDispatch()

  const { user } = useAuth0()
  console.log('user',user)

  const usuario = useSelector((state) => state.userLogged)
  console.log('uu',usuario)

  useEffect(() => {
    if (user) {
      dispatch(postUser(user))
    }
  }, [user])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPoaching())
  }, [dispatch])



  return (
    <div className='contenedor'>
    <BrowserRouter>
    <NavBar/>
     <Routes>
        <Route>
         <Route path='/' element={<Home/>} />
         <Route path='/avistaje' element={<Avistaje/>} />
         <Route path='/poaching' element={<Poaching/>} />
         <Route path='/mapview' element={<MapView/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/aboutUs' element={<AboutUs/>} />
        </Route>
        {/* <Route
            path='/admin'
            element={
              <ProtectedRoute
                redirectPath='/'
                isAllowed={usuario.length === 1 && usuario[0].isSuperAdmin === true}
              >
                <Admin />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path='/sightingData'
            element={
              <ProtectedRoute
                redirectPath='/'
                isAllowed={usuario.length === 1 && usuario[0].isSuperAdmin === true}
              >
                <SightingData/>
              </ProtectedRoute>
            }
          />
          <Route
            path='/trafficData'
            element={
              <ProtectedRoute
                redirectPath='/'
                isAllowed={usuario.length === 1 && usuario[0].isSuperAdmin === true}
              >
                <TrafficData />
              </ProtectedRoute>
            }
          />
          <Route
            path='/sightingID/:id'
            element={
              <ProtectedRoute
                redirectPath='/'
                isAllowed={
                  usuario.length === 1 && usuario[0].isSuperAdmin === true
                }
              >
                <SightingDetails />
              </ProtectedRoute>
            }
          />
           <Route
            path='/putSighting/:id'
            element={
              <ProtectedRoute
                redirectPath='/'
                isAllowed={
                  usuario.length === 1 && usuario[0].isSuperAdmin === true
                }
              >
                <PutSighting />
              </ProtectedRoute>
            }
          />
          <Route
            path='/poachingID/:id'
            element={
              <ProtectedRoute
                redirectPath='/'
                isAllowed={
                  usuario.length === 1 && usuario[0].isSuperAdmin === true
                }
              >
                <PoachingDetails />
              </ProtectedRoute>
            }
          />
           <Route
            path='/putPoaching/:id'
            element={
              <ProtectedRoute
                redirectPath='/'
                isAllowed={
                  usuario.length === 1 && usuario[0].isSuperAdmin === true
                }
              >
                <PutPoaching />
              </ProtectedRoute>
            }
          />
      </Routes>
      <BottomBar/>
    </BrowserRouter>
    </div>
  );
}

export default App;
