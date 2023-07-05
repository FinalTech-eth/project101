<<<<<<< HEAD
import React from 'react'
import AdminSideBar from '../../Components/Admin/SideBar'
import '../../Pages/Admin/style.css'

const AdminSharedLayout = () => {
  return (
    <>
        <AdminSideBar/>
    </>
  )
}

export default AdminSharedLayout
=======
import * as React from "react";
import { Outlet } from "react-router-dom";
export default function AdminSharedLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
>>>>>>> 4fb5b03226a68476223651aeb14318c8dcb1b657
