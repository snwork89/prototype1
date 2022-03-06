import React, { useState } from "react";
import FlightTableView from "./flightTableView";
import FlightListView from "./flightListView";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { overBooking } from "../types/overbooking";
import OverBookingPopup from "../Popup/OverBookingPopup";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    twoDivision: {
      display:"grid",
      gridTemplateColumns:"1fr 1fr"
    },
  
});


const Flight = () => {
  const [responsive, setResponsive] = useState<string>("default");
  const [selectedFlightOverBooking, setSelectedFlightOverBooking] = useState<
    overBooking[] | []
  >([]);
  const handleChange = (event: SelectChangeEvent) => {
    setResponsive(event.target.value as string);
  };
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box sx={{ minWidth: 120, margin: "80px", textAlign: "center" }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Mode</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={responsive}
            label="Mode"
            style={{ minWidth: 120 }}
            onChange={handleChange}
          >
            <MenuItem value={"default"}>Default</MenuItem>
            <MenuItem value={"responsive"}>Responsive</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className={classes.twoDivision}>
        
         
      
          {responsive === "responsive" ? (
            <FlightListView
            setSelectedFlightOverBookingy={setSelectedFlightOverBooking}
              selectedFlightOverBooking={selectedFlightOverBooking}
              
            />
          ) : (
            <FlightTableView
              setSelectedFlightOverBookingy={setSelectedFlightOverBooking}
              selectedFlightOverBooking={selectedFlightOverBooking}
            />
          )}
         <OverBookingPopup
            selectedFlightOverBooking={selectedFlightOverBooking}
          />
      </div>
    </React.Fragment>
  );
};

export default Flight;
