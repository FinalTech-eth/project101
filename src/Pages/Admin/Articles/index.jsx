import React, { useState } from "react";
import axios from "../../../API/axios";
import { Button, FormControl, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { toast, ToastContainer } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
import ArticlesTable from "./ArticlesTable";
import { TextField } from "@mui/material";
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

  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isForEdit, setIsForEdit] = useState(false);
  const admin = JSON.parse(localStorage.getItem("admin"));
  const token = admin?.token;

  const fetchArticles = async () => {
    try {
      const response = await axios.get("/articles");
      setArticles(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchArticle = async (id) => {
    try {
      const response = await axios.get("/article/" + id);
      setOpenDialog(true);
      setIsForEdit(true);

      setArticle(response.data);

      setDescription(response.data.description);
      setPreviewImage(response.data.image);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);

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
      formData.append("author", data.author);
      formData.append("slug", data.title.toLowerCase().split(" ").join("-"));
      formData.append("publication_date", data.publication_date);
      formData.append("image", imageUrl);

      // Make a POST request using Axios and the FormData
      if (isForEdit) {
        await axios.put("/article/update/" + article?._id, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        await axios.post("/add-article", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      }

      setSelectedImage(null);
      setPreviewImage(null);
      toast.success("Article created successfully!");
      setOpenDialog(false);
      fetchArticles();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create article.");
    } finally {
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
          Add Article
        </Button>
      </Box>
      <ArticlesTable
        articles={articles}
        isLoading={isLoading}
        fetchArticles={fetchArticles}
        fetchArticle={fetchArticle}
      />
      <Dialog
        open={openDialog}
        onClose={() => {
          setOpenDialog(false);
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          encType="multipart/form-data"
        >
          <DialogContent>
            <DialogContentText>Create a New Notice</DialogContentText>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                required
                label="Title"
                id="article-title"
                defaultValue={article?.title}
                {...register("title", { required: true })}
                error={!!errors.title}
                helperText={errors.title && "Title is required"}
                fullWidth={true}
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                required
                label="Author"
                defaultValue={article?.author}
                id="article-title"
                {...register("author", { required: true })}
                error={!!errors.author}
                helperText={errors.author && "Author is required"}
                fullWidth={true}
              />
            </FormControl>
            <FormControl sx={{ mt: 2 }}>
              <TextField
                label="Publication Date" // Update the label to "Datetime"
                type="datetime-local" // Use "datetime-local" input type for datetime
                variant="outlined"
                defaultValue={new Date(
                  article ? article.publication_date : null
                )
                  ?.toISOString()
                  .slice(0, 16)}
                {...register("publication_date", { required: true })}
                error={!!errors.publication_date}
                helperText={
                  errors.publication_date && "Publication date is required"
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
