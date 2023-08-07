import React, { useState, useEffect } from "react";
import axios from "../../../API/axios";
import { Button, FormControl, Box, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast, ToastContainer } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import NoticeTable from "./NoticeTable";
import Loading from "../../../Components/Loading";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import "./styles.css";

const Index = () => {
  const [notices, setNotices] = useState([]);
  const [noticeId, setNoticeId] = useState(null);
  const [isForEdit, setIsForEdit] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [singleFetchIsLoading, setSingleFetchIsLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
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
  const token = admin?.token;

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
      }
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", description);
      formData.append("image", imageUrl);

      if (isForEdit) {
        await axios.put("/notice/update/" + noticeId, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Notice updated successfully!");
        fetchNotices();
        reset();
        setOpenDialog(false);
      } else {
        await axios.post("/add-notice", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        setSelectedImage(null);
        setPreviewImage(null);
        toast.success("Notice created successfully!");
        setOpenDialog(false);
        reset();
        fetchNotices();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create notice.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchNotices = async () => {
    try {
      const response = await axios.get("/notice");
      setNotices(response.data.items.reverse());
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotice = async (id) => {
    try {
      setOpenDialog(true);
      setSingleFetchIsLoading(true);
      setIsForEdit(true);

      const response = await axios.get("/notice/" + id);
      setSingleFetchIsLoading(false);
      setNoticeId(response.data._id);
      setValue("title", response.data.title);
      setPreviewImage(response.data.image);
      setDescription(response.data.description);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedImage(null);
    setPreviewImage(null);
    setDescription("");
    setIsForEdit(null);
    fetchNotices();
    reset();
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
      <NoticeTable
        fetchNotices={fetchNotices}
        fetchNotice={fetchNotice}
        notices={notices}
        isLoading={isLoading}
      />
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          encType="multipart/form-data"
        >
          <DialogContent>
            {singleFetchIsLoading ? (
              <>
                <DialogContentText>Edit Notice</DialogContentText>
                <div sx={{ mt: 2 }} style={{ minWidth: "500px" }}>
                  <Loading />
                </div>
              </>
            ) : (
              <>
                <DialogTitle sx={{ padding: "0", marginBottom: "1rem" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <DialogContentText sx={{ paddingLeft: "1rem" }}>
                      Create a new Notice
                    </DialogContentText>
                    <IconButton onClick={() => handleCloseDialog()}>
                      <CancelIcon />
                    </IconButton>
                  </Box>
                </DialogTitle>
                <FormControl sx={{ mt: 2 }}>
                  <TextField
                    placeholder="Enter Title"
                    id="notice-title"
                    {...register("title", { required: true })}
                    error={!!errors.title}
                    helperText={errors.title && "Title is required"}
                  ></TextField>
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
              </>
            )}
          </DialogContent>
          <DialogActions sx={{ padding: "20px 24px" }}>
            <Button
              autoFocus
              color="primary"
              variant="outlined"
              type="submit"
              endIcon={isSubmitting ? <CircularProgress size={20} /> : ""}
              disabled={isSubmitting}
            >
              {isForEdit ? "Update" : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default Index;
