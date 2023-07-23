import React, { useState } from "react";
import axios from "../../../API/axios";
import { Button, FormControl, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import BooksTable from "./BooksTable";
import TextField from "@mui/material/TextField";
import "./styles.css";
const Index = () => {
  const [description, setDescription] = useState("");
  const [bookURL, setBookURL] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const onSelectFile = (event) => {
    const selectedFile = event.target.files[0];
    // const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = URL.createObjectURL(selectedFile);

    setSelectedImage(selectedFile);
    setPreviewImage(imagesArray);

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin.token;

  const handleFormSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Create a FormData object to send the image as a multipart form
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("no_of_pages", data.no_of_pages);
      formData.append("image", selectedImage);
      formData.append("file", bookURL);
      console.log("The book url : ", bookURL);
      formData.append("author", data.author);
      formData.append("slug", data.title.toLowerCase().split(" ").join("-"));
      formData.append("published_on", data.published_on);
      // Make a POST request using Axios and the FormData
      const response = await axios.post("/add-book", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setSelectedImage(null);
      setPreviewImage(null);
      toast.success("Event created successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create event.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = async (event) => {
    const book = event.target.files[0];
    const formData = new FormData();
    formData.append("file", book);

    const { data } = await axios.post("/add-file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    setBookURL(data);
  };

  const handleEditBook = (event) => {
    // setSelectedNotice(event);
    // setOpenModal(true);
  };

  return (
    <>
      <Box sx={{ width: "100%", marginBottom: "4rem" }}>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenDialog(true);
          }}
          sx={{ float: "right" }}
        >
          Add Book
        </Button>
      </Box>
      <BooksTable handleEditBook={handleEditBook} openDialog={openDialog} />
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
      >
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          encType="multipart/form-data"
        >
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DialogTitle>Add Book</DialogTitle>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                required
                id="book-title"
                label="Title"
                {...register("title", { required: true })}
                error={!!errors.title}
                helperText={errors.title && "Title is required"}
                fullWidth={true}
              />
              <TextField
                label="Author"
                id="book-author"
                {...register("author", { required: true })}
                error={!!errors.author}
                helperText={errors.autho && "Author is required"}
              />
              <TextField
                label="No. of pages"
                id="number-of-pages"
                {...register("no_of_pages", { required: true })}
                error={!!errors.title}
                helperText={errors.no_of_pages && "No of Pages is required"}
              />
              <TextField
                label="Publication Date"
                id="publication-date"
                {...register("published_on", { required: true })}
                error={!!errors.published_on}
                helperText={
                  errors.published_on && "publication Date is required"
                }
              />
              <Box>
                <label className="add-image-label">
                  Add Image
                  <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    style={{ display: "none" }}
                    accept="image/png , image/jpeg, image/webp"
                  />
                </label>
                {previewImage && (
                  <div className="preview-image">
                    <div className="preview-image-container">
                      <img src={previewImage} alt="upload" />
                    </div>
                  </div>
                )}
              </Box>
              <label className="book-file-upload">
                <p>{bookURL ? "Uploaded Successfully" : "Upload File"}</p>
                <input
                  type="file"
                  accept="pdf"
                  name="file"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                />
              </label>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ padding: "20px 24px" }}>
            <Button autoFocus color="primary" variant="outlined" type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Index;
