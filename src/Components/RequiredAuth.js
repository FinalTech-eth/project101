import React, { useEffect } from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";

function checkTokenExpiry() {
  const expiryTime = JSON.parse(localStorage.getItem("expiryTime"));

  if (new Date().getTime() >= expiryTime) {
    // Token has expired, remove it from local storage
    localStorage.removeItem("admin");
    localStorage.removeItem("expiryTime");
  }
}

function RequiredAuth() {
  useEffect(() => {
    checkTokenExpiry();
  });
  const admin = JSON.parse(localStorage.getItem("admin"));
  const location = useLocation();
  return admin ? (
    <Outlet />
  ) : (
    <Navigate to="/admin" state={{ from: location }} replace />
  );
}

export default RequiredAuth;
