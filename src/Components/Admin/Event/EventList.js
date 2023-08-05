import React, { useState, useEffect } from "react";
import {
  Avatar,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  Modal,
  Box,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
import img from "../../../Assets/Images/logo.jpg";
import AddEventForm from "./AddEvent";
import axios from "../../../API/axios";
import Loading from "../../Loading";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { toast, ToastContainer } from "react-toastify";
import EditEventForm from "./EditEvent";
import { format } from "date-fns";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const EventList = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openModal, setOpenModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

 const fetchEvents = async () => {
   try {
     const response = await axios.get("/event");
     const sortedEvents = response.data.items.sort((a, b) => {
       return new Date(b.createdAt) - new Date(a.createdAt);
     });
     setEvents(sortedEvents);
     setIsLoading(false);
   } catch (error) {
     console.error(error);
     setIsLoading(false);
   }
 };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setOpenModal(true);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`/event/delete/${eventId}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }});
      fetchEvents(); // Fetch events again after deletion to update the list
      toast.success("Event deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event.");
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const filteredEvents = events?.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedEvents = filteredEvents?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleAddEvent = () => {
    setSelectedEvent(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFetchEvents = () => {
    fetchEvents();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 1rem",
          width: "100%",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          style={{ marginRight: "1rem", width: "50%" }}
        />
        <Button
          variant="outlined"
          onClick={handleAddEvent}
          sx={{ padding: "1rem" }}
        >
          Create Event
        </Button>
      </div>

      <TableContainer component={Paper} style={{ flexGrow: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Title</TableCell>
              {/* <TableCell>Description</TableCell> */}
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEvents?.map((event) => (
              <TableRow key={event.id} className="row">
                <TableCell>
                  <Avatar src={event.image} />
                </TableCell>
                <TableCell>{event.title}</TableCell>
                {/* <TableCell>{event.description}</TableCell> */}
                <TableCell>
                  {format(new Date(event?.date), "MMM d yyyy")}
                </TableCell>
                <TableCell>
                  <IconButton aria-label="view">
                    <Link to={`/event/${event._id}`}>
                      <VisibilityIcon />
                    </Link>
                  </IconButton>
                  <IconButton
                    onClick={() => handleEditEvent(event)}
                    aria-label="Edit"
                  >
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteEvent(event._id)}
                    aria-label="Delete"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredEvents?.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25]}
      />

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxHeight: "90vh",
            overflow: "auto",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedEvent ? (
            <EditEventForm
              event={selectedEvent}
              onCloseModal={handleCloseModal}
              onFetchEvents={handleFetchEvents}
            />
          ) : (
            <AddEventForm
              onCloseModal={handleCloseModal}
              onFetchEvents={handleFetchEvents}
            />
          )}
        </Box>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default EventList;
