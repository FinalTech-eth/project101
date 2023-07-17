import React, { useState } from "react";
import axios from "../../../API/axios";
import {
  Typography,
  Button,
  Form,
  FormGroup,
  FormControl,
  Box,
  TextField,
  InputLabel,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parser from "html-react-parser";
import "./styles.css";

function Index() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0),
    createData("Ice cream sandwich", 237, 9.0),
    createData("Eclair", 262, 16.0),
  ];
  const StyledButton = styled(Button)`
    color: #000;
    padding: 5px 8px;
    text-transform: capitalize;
    border-radius: 4px;
    width: 100px;
  `;

  /* Dialog */

  const StyleDialog = styled(Dialog)({
    "& .MuiPaper-root": {
      width: "500px",
    },
  });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const openPopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin.token;

  const handleFormSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Create a FormData object to send the image as a multipart form
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      console.log("The image : ", data.image[0]);
      formData.append("image", data.image[0]);

      // Make a POST request using Axios and the FormData
      await axios.post("/add-notice", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // Reset form fields and selected image
      // reset();
      setSelectedImage(null);
      // onCloseModal();
      toast.success("Event created successfully!");

      // Fetch all events
      // onFetchEvents();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create event.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  return (
    <>
      <Box sx={{ width: "100%", marginBottom: "4rem" }}>
        <Button variant="outlined" onClick={openPopup} sx={{ float: "right" }}>
          Create Notice
        </Button>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <StyleDialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form
        // onSubmit={handleSubmit(handleFormSubmit)}
        // encType="multipart/form-data"
        >
          <DialogContent>
            <DialogContentText>Create a New Notice</DialogContentText>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                m: "auto",
                width: "100%",
              }}
            >
              {/* <FormControl sx={{ mt: 2 }}>
                <TextField
                  id="notice-title"
                  label="Title"
                  variant="outlined"
                  {...register("title", { required: true })}
                  error={!!errors.title}
                  helperText={errors.title && "Title is required"}
                ></TextField>
              </FormControl> */}
              <FormControl sx={{ mt: 2 }}>
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                    console.log("The data : ", { event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </FormControl>
              {/* <Box sx={{ mt: 2 }}>
                <label htmlFor="image-upload">
                  <input
                    id="image-upload"
                    type="file"
                    {...register("image")}
                    accept="image/*"
                    // onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                  <Button variant="contained" component="span">
                    Upload Image
                  </Button>
                </label> */}
              {/* {selectedImage && (
                  <Box mt={2}>
                    <Typography variant="subtitle1">
                      Selected Image Preview:
                    </Typography>
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      style={{ height: "200px" }}
                    />
                  </Box>
                )} */}
              {/* </Box> */}
            </Box>
          </DialogContent>
          <DialogActions sx={{ padding: "20px 24px" }}>
            <StyledButton
              autoFocus
              color="primary"
              variant="outlined"
              type="submit"
            >
              Submit
            </StyledButton>
          </DialogActions>
        </form>
      </StyleDialog>
      <ToastContainer />
    </>
  );
}

export default Index;
