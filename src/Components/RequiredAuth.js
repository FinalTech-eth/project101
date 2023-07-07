import React from 'react';

import {useLocation, Navigate, Outlet} from 'react-router-dom'


function RequiredAuth() {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const location = useLocation();
  return (
        admin? <Outlet/>
        : <Navigate to='/admin' state={{ from: location}} replace />
  )
}

export default RequiredAuth