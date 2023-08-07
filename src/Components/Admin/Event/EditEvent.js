import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography, MenuItem, Menu } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "../../../API/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SaveIcon from "@mui/icons-material/Save";
import EventCategories from "../../../Enums/EventCategory";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Select from '@mui/material/Select';

const admin = JSON.parse(localStorage.getItem("admin"));
const token = admin?.token;

const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const response = await axios.post("/image-upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const EditEventForm = ({ event, onCloseModal, onFetchEvents }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Populate the form fields with the event data when the component mounts
    setValue("title", event.title);
    setValue("description", event.description);
    setValue("location", event.location);
    setValue("date",
      new Date(event.date)?.toISOString().slice(0, 16)
     );
    setValue("category", event.category); // Set the "category" value
    setValue("videoUrl", event.videoUrl); // Set the "category" value
  }, [event, setValue]);

  const [category, setCategory] = useState(event.category || '');

  const handleChange = (event) => {
    setCategory(event.target.value)
  };

  const handleFormSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Upload image using the new utility function
      let imageUrl = null;
      if (selectedImage) {
        imageUrl = await uploadImage(selectedImage);
      }

      // Create a FormData object to send the data as a multipart form
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("date", data.date);
      formData.append("image", imageUrl || event.image); // Use previous image URL if no new image is selected
      formData.append("category", category); // Add the "category" field to the FormData
      formData.append("videoUrl", data.videoUrl);

      // Make a PUT request using Axios and the FormData
      await axios.put(`/event/update/${event._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      // Reset form fields and selected image
      reset();
      setSelectedImage(null);
      onCloseModal();
      toast.success("Event updated successfully!");

      // Fetch all events
      onFetchEvents();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update event.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <>
     <IconButton onClick={() => onCloseModal()}
     sx={{position:"fixed",  justifyContent:"end", right: "10px"}}
     > 
    <CancelIcon />
    </IconButton>

    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "50%",
        minHeight: "80vh",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
      encType="multipart/form-data" // Set the form's encoding type to multipart/form-data
    >
      <TextField
        label="Title"
        variant="outlined"
        {...register("title", { required: true })}
        error={!!errors.title}
        helperText={errors.title && "Title is required"}
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        {...register("description", { required: true })}
        error={!!errors.description}
        helperText={errors.description && "Description is required"}
      />
      <TextField
        label="Location"
        variant="outlined"
        {...register("location", { required: true })}
        error={!!errors.location}
        helperText={errors.location && "Location is required"}
      />
      <TextField
        label="Date and time" // Update the label to "Datetime"
        type="datetime-local" // Use "datetime-local" input type for datetime
        variant="outlined"
        {...register("date", { required: true })}
        error={!!errors.date}
        helperText={errors.date && "Date and time is required"}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
          error={!!errors.category}

          helperText={errors.category && "Category is required"}
        >
        {/* <TextField
          label="Category"
          select
          variant="outlined"
          {...register("category", { required: true })}
          error={!!errors.category}
          helperText={errors.category && "Category is required"}
        > */}
          {Object.values(EventCategories).map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
          <MenuItem value="other">Other</MenuItem>
        {/* </TextField> */}
      </Select>
      <TextField
        label="Video Link" // Add the "video-link" field
        variant="outlined"
        {...register("videoUrl")}
      />

      <Box sx={{ mt: 2 }}>
        <label htmlFor="image-upload">
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>
        {selectedImage && (
          <Box mt={2}>
            <Typography variant="subtitle1">Selected Image Preview:</Typography>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              style={{ height: "200px" }}
            />
          </Box>
        )}
        {!selectedImage && event.image && (
          <Box mt={2}>
            <Typography variant="subtitle1">Previous Image:</Typography>
            <img src={event.image} alt="Previous" style={{ height: "200px" }} />
          </Box>
        )}
      </Box>
      <LoadingButton
        variant="contained"
        type="submit"
        loading={isSubmitting}
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Update Event
      </LoadingButton>

      <ToastContainer />
    </form>
        
    </>
  );
};

export default EditEventForm;
