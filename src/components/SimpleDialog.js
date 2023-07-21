import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
const SimpleDialog = ({bmiResult, health, healthyRange}) => {
  const [isOpen, setIsOpen] = useState(true); //NEW STATE INTRODUCED
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>
        {" "}
        <Typography variant="h4">Your BMI Result is</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          BMI : {bmiResult}
        </Typography>
        <Typography variant="h6">
          Health : {health}
        </Typography>
        <Typography variant="h6">
          Healthy BMI Range : {healthyRange}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={() => setIsOpen(true)} >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
 
export default SimpleDialog;