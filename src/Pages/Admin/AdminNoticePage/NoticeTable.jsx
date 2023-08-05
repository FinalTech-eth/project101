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

const NoticeTable = ({ fetchNotices, fetchNotice, notices, isLoading }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const handleDeleteNotice = async (noticeId) => {
    try {
      await axios.delete(`/notice/delete/${noticeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchNotices();
      toast.success("Notice deleted successfully!");
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
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notices.map((notice) => (
                <TableRow
                  key={notice._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {notice.title}
                  </TableCell>
                  <TableCell align="center">
                    {parser(notice.description)}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      src={notice.image}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                      alt="notice-img"
                    />
                  </TableCell>
                  <TableCell sx={{ display: "flex", justifyContent: "center" }}>
                    <IconButton
                      onClick={() => fetchNotice(notice._id)}
                      aria-label="Edit"
                    >
                      <ModeEditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteNotice(notice._id)}
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

export default NoticeTable;
