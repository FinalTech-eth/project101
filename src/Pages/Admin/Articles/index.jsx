import React, { useState } from "react";
import axios from "../../../API/axios";
import { Button, FormControl, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import ArticlesTable from "./ArticlesTable";
import "./styles.css";
const Index = () => {
  const [description, setDescription] = useState("");
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
      formData.append("description", description);
      formData.append("image", selectedImage);
      // Make a POST request using Axios and the FormData
      await axios.post("/add-notice", formData, {
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

  const handleEditNotice = (event) => {
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
          Create Notice
        </Button>
      </Box>
      <ArticlesTable handleEditNotice={handleEditNotice} />
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          encType="multipart/form-data"
        >
          <DialogContent>
            <DialogContentText>Create a New Notice</DialogContentText>
            <FormControl sx={{ mt: 2 }}>
              <Input
                placeholder="Enter Title"
                id="notice-title"
                {...register("title", { required: true })}
                error={!!errors.title}
                helperText={errors.title && "Title is required"}
              ></Input>
            </FormControl>
            <Box sx={{ marginTop: "10px" }}>
              <label>Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setDescription(data);
                }}
              />
            </Box>
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
