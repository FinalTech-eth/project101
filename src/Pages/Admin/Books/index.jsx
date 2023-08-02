import React, { useState, useEffect } from "react";
import axios from "../../../API/axios";
import { Button, FormControl, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { toast, ToastContainer } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import BooksTable from "./BooksTable";
import TextField from "@mui/material/TextField";
import "./styles.css";
const Index = () => {
  const [bookURL, setBookURL] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [book, setBook] = useState(null);
  const [bookFile, setBookFile] = useState(null);

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
  const [isForEdit, setIsForEdit] = useState(false);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin.token;

  const handleFormSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      let imageUrl = previewImage;

      if (selectedImage) {
        const imageFormData = new FormData();
        imageFormData.append("image", selectedImage);
        const { data } = await axios.post("/image-upload", imageFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        imageUrl = data;

        // Upload book
        if (bookFile.type !== "application/pdf") {
          toast.error("File upload failed. Only PDF files are allowed.");
          return;
        }
        const formData = new FormData();
        formData.append("file", bookFile);

        const { data: bookData } = await axios.post("/add-file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        setBookURL(bookData);
      }
      // Create a FormData object to send the image as a multipart form
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("no_of_pages", data.no_of_pages);
      formData.append("image", imageUrl);
      formData.append("file", bookURL);
      formData.append("author", data.author);
      formData.append("slug", data.title.toLowerCase().split(" ").join("-"));
      formData.append("published_on", data.published_on);

      // Make a POST request using Axios and the FormData
      if (isForEdit) {
        await axios.put("/book/update/" + book?._id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await axios.post("/add-book", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      }
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
    setBookFile(book);
  };

  const fetchBook = async (id) => {
    try {
      const response = await axios.get("/book/" + id);
      setOpenDialog(true);
      setIsForEdit(true);

      setBook(response.data);
      setValue("title", response.data.title);
      setValue("author", response.data.author);
      setValue("no_of_pages", response.data.no_of_pages);

      setValue(
        "published_on",
        new Date(book ? book.published_on : null)?.toISOString().slice(0, 16)
      );
      setPreviewImage(response.data.image);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setBookFile(null);
    setIsForEdit(null);
    setBook(null);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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
      <BooksTable fetchBook={fetchBook} books={books} isLoading={isLoading} />
      <Dialog
        open={openDialog}
        onClose={() => handleCloseDialog()}
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
                label="Publication Date" // Update the label to "Datetime"
                type="datetime-local" // Use "datetime-local" input type for datetime
                variant="outlined"
                {...register("published_on", { required: true })}
                error={!!errors.published_on}
                helperText={
                  errors.published_on && "Publication date is required"
                }
                InputLabelProps={{
                  shrink: true,
                }}
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
                  name="file"
                  onChange={handleFileUpload}
                  style={{ display: "none" }}
                  accept="application/pdf"
                />
              </label>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ padding: "20px 24px" }}>
            <Button autoFocus color="primary" variant="outlined" type="submit">
              {isForEdit ? "Update" : "Submit"}
            </Button>
          </DialogActions>
        </form>

        <ToastContainer />
      </Dialog>
    </>
  );
};

export default Index;
