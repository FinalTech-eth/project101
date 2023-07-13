import AdminSideBar from "../../Components/Admin/SideBar";
import "../../Pages/Admin/style.css";

const AdminSharedLayout = () => {
  return (
    <>
      <AdminSideBar />
    </>
  );
};

export default AdminSharedLayout;

// import * as React from "react";
// import { Outlet } from "react-router-dom";
// export default function AdminSharedLayout() {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// }
