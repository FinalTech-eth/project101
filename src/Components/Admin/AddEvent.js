import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';

const AddEventForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    // Perform event submission logic here
    // For simplicity, we'll just log the event details
    console.log(data);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // setValue('image', file);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '50%',
        minHeight: '80vh',
        alignContent: 'center',
        justifyContent: 'center',

      }}>
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
        {...register('description', { required: true })}
        error={!!errors.description}
        helperText={errors.description && 'Description is required'}
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
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </Box>
      <Button variant="contained" type="submit">
        Create Event
      </Button>
    </form>
  );
};

export default AddEventForm;
