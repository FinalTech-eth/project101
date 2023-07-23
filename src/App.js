import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Index";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import NotFoundPage from "./Pages/Error";
import SingleEventPage from "./Pages/Event/SingleEvent";
import ClientSharedLayout from "./Layers/SharedLayouts/ClientSharedLayout";
import AdminSharedLayout from "./Layers/SharedLayouts/AdminSharedLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import AddEvent from "./Pages/Admin/AddEvent";
import AdminSideBar from "./Components/Admin/SideBar";
import AllEvents from "./Pages/Admin/AllEvents";
import GalleryImages from "./Pages/Admin/Gallery";
import SignIn from "./Pages/Admin/Auth/SignIn";
import RequiredAuth from "./Components/RequiredAuth";
import AllImages from "./Pages/Admin/Gallery/AllImages";
import AdminNoticePage from "./Pages/Admin/AdminNoticePage";
import ContactUs from "./Pages/ContactUs";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ClientSharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="event/:id" element={<SingleEventPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
          <Route path="admin" element={<SignIn />} />
          <Route element={<RequiredAuth />}>
            <Route path="/dashboard" element={<AdminSideBar />}>
              <Route index element={<Dashboard />} />
              <Route path="add-event" element={<AddEvent />} />
              <Route path="events" element={<AllEvents />} />
              <Route path="gallery" element={<AllImages />} />
              <Route path="notice" element={<AdminNoticePage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
