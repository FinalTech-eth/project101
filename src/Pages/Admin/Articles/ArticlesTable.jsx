import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toast, ToastContainer } from "react-toastify";
import axios from "../../../API/axios";
import Loading from "../../../Components/Loading";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

const ArticlesTable = ({ handleEditBook, openDialog }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    if (openDialog) {
      fetchBooks();
    }
  }, [openDialog]);

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin.token;

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/books");
      setBooks(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`/book/delete/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchBooks(); // Fetch events again after deletion to update the list
      toast.success("Book deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">No. of Pages</TableCell>
                <TableCell align="center">Published On</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Book</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow
                  key={book._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {book.title}
                  </TableCell>
                  <TableCell align="center">{book.author}</TableCell>
                  <TableCell align="center">{book.no_of_pages}</TableCell>
                  <TableCell align="center">{book.published_on}</TableCell>
                  <TableCell align="center">
                    <img
                      src={book.image}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      alt="book-img"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <a href={book.file} target="_blank">
                      {book.title}
                    </a>
                  </TableCell>
                  <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                    <IconButton
                      onClick={() => handleEditBook(book)}
                      aria-label="Edit"
                    >
                      <ModeEditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteBook(book._id)}
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
      </Box>
    </>
  );
};

export default ArticlesTable;
