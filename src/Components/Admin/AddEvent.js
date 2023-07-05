import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddEventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFormSubmit = (data) => {
    // Perform event submission logic here
    // For simplicity, we'll just log the event details
    console.log(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '50%',
        minHeight: '80vh',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}
    >
      <TextField
        label="Title"
        variant="outlined"
        {...register('title', { required: true })}
        error={!!errors.title}
        helperText={errors.title && 'Title is required'}
      />
      <TextField
        label="Description"
        variant="outlined"
        multiline
        rows={4}
        {...register('description', { required: true })}
        error={!!errors.description}
        helperText={errors.description && 'Description is required'}
      />
      <TextField
        label="Location"
        variant="outlined"
        {...register('location', { required: true })}
        error={!!errors.location}
        helperText={errors.location && 'Location is required'}
      />
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        {...register('date', { required: true })}
        error={!!errors.date}
        helperText={errors.date && 'Date is required'}
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
            style={{ display: 'none' }}
          />
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>
        {selectedImage && (
          <Box mt={2}>
            <Typography variant="subtitle1">Selected Image Preview:</Typography>
            <img src={selectedImage} alt="Selected" style={{ height: '200px' }} />
          </Box>
        )}
      </Box>
      <Button variant="contained" type="submit">
        Create Event
      </Button>
    </form>
  );
};

export default AddEventForm;
