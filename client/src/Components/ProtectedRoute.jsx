import React from 'react';

import {
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom';


export default function ProtectedRoute ({
  isAllowed,//isAuthenticated--> true
  redirectPath = '/',
  children
})

{


  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
