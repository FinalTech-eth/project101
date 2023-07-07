import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "../../../API/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SaveIcon from "@mui/icons-material/Save";

const EditEventForm = ({ event, onCloseModal, onFetchEvents }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();
  const [selectedImage, setSelectedImage] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Populate the form fields with the event data when the component mounts
    setValue("title", event.title);
    setValue("description", event.description);
    setValue("location", event.location);
    setValue("date", event.date);
  }, [event, setValue]);

  const handleFormSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Create a FormData object to send the image as a multipart form
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("date", data.date);
      formData.append("image", selectedImage);

      // Make a PUT request using Axios and the FormData
      await axios.put(`/api/event/update/${event._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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
        label="Date"
        type="date"
        variant="outlined"
        {...register("date", { required: true })}
        error={!!errors.date}
        helperText={errors.date && "Date is required"}
        InputLabelProps={{
          shrink: true,
        }}
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
  );
};

export default EditEventForm;
