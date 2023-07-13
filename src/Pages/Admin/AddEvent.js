import React from "react";
import AddEventForm from "../../Components/Admin/Event/AddEvent";
import { Card, styled } from "@mui/material";

const AddEvent = () => {
  return (
    <>
      <div className="center_center col">
        {/* <Card sx={{padding: '1rem'}}> */}
        <AddEventForm />
        {/* </Card> */}
      </div>
    </>
  );
};

export default AddEvent;
