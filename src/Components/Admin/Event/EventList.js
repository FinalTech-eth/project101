import React, { useState } from 'react';
import { Avatar, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, TablePagination, Modal, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css'
import img from '../../../Assets/Images/logo.jpg';
import AddEventForm from '../AddEvent';

const events = [
  {
    id: 1,
    title: 'Conference',
    description: 'A conference on technology and innovation',
    date: '2023-08-15',
    image: img
  },
  {
    id: 2,
    title: 'Workshop',
    description: 'A hands-on workshop on web development',
    date: '2023-09-10',
    image: img
  },
  {
    id: 3,
    title: 'Seminar',
    description: 'A seminar on leadership skills',
    date: '2023-07-25',
    image: img
  },
  {
    id: 4,
    title: 'Meetup',
    description: 'A community meetup for networking',
    date: '2023-08-05',
    image: img
  },
  {
    id: 5,
    title: 'Hackathon',
    description: 'A 24-hour hackathon for coding enthusiasts',
    date: '2023-09-18',
    image: img
  },
  {
    id: 6,
    title: 'Exhibition',
    description: 'An exhibition showcasing art and culture',
    date: '2023-07-30',
    image: img
  },
];

const EventList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openModal, setOpenModal] = useState(false);

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

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedEvents = filteredEvents.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleAddEvent = () => {
    setOpenModal(true);
  };

  const handleViewEvent = (event) => {
    // Logic for viewing an event
    console.log('View Event:', event);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 1rem', width: '100%' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          style={{ marginRight: '1rem', width: '50%' }}
        />
        <Button variant="outlined" onClick={handleAddEvent} sx={{ padding: '1rem' }}>
          Create Event
        </Button>
      </div>
      <TableContainer component={Paper} style={{ flexGrow: 1 }}>
        <Table>
          <TableHead>
            <TableRow className="">
              <TableRow></TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedEvents.map((event) => (
              <TableRow key={event.id} className="row">
                <TableCell>
                  <Avatar src={event.image} />
                </TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.description}</TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={() => handleViewEvent(event)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredEvents.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 25]}
      />

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box className='center_center' sx={{ width: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <AddEventForm />
        </Box>
      </Modal>
    </div>
  );
};

export default EventList;

