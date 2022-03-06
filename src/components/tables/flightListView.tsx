import React, { Dispatch, SetStateAction } from "react";
import FlightDataJSON from "../../data/flightes.json";
import { FlightTypes } from "../types/flight";
import { overBooking } from "../types/overbooking";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import OverBookingDataJson from "../../data/overbooking.json";
import createFlightData from "../../utils/createFlightData";
import createOverBookingData from "../../utils/createOverBookingData";
import renderBackGroundColor from "../../utils/renderBackGroundColor";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    keyStyle:{
      fontWeight: "bold",
      padding: "15px",
      width: "50px",
    },
    valueStyle:{
      fontWeight: "normal",
      padding: "15px",
      width: "50px",
    }
});
interface FlightListViewProps {
  selectedFlightOverBooking: overBooking[];
  setSelectedFlightOverBookingy: Dispatch<SetStateAction<overBooking[]>>;
}

const FlightListView = (props: FlightListViewProps) => {
  const classes = useStyles();
  let flightArray: FlightTypes[] = [];
  let overBookingData: overBooking[] = [];
  FlightDataJSON.forEach((flight: FlightTypes) => {
    flightArray.push(createFlightData(flight));
  });

  OverBookingDataJson.forEach((data: overBooking) => {
    overBookingData.push(createOverBookingData(data));
  });

  const handleListRowClick = (flightNumber: Number) => {
    let filteredBookingdata =
      overBookingData &&
      Array.isArray(overBookingData) &&
      overBookingData.filter((x: overBooking) => x.flightId == flightNumber);

    props.setSelectedFlightOverBookingy(
      filteredBookingdata ? [...filteredBookingdata] : []
    );

  };

  return (
    <Box
      sx={{
        margin: "50px",
        bgcolor: "background.paper",
      }}
    >
      <List>
        {flightArray.map((flightData: FlightTypes) => {
          const objects: (string | number)[][] = Object.entries(flightData);

          return (
            <React.Fragment key={flightData.flight}>
              {objects.map((data: (string | number)[]) => {
                return (
                  <Paper key={data[0]}>
                    <ListItem
                      onClick={() => handleListRowClick(flightData.flight)}

                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        justifyItems: "center",
                        padding:0,
                        backgroundColor: renderBackGroundColor(
                        flightData.flight,
                        props.selectedFlightOverBooking
                      )}}
                
                    >
                      <div
                       className={classes.keyStyle}
                      >
                        {data[0]}
                      </div>
                      <div
                        className={classes.valueStyle}
                      >
                        {data[1]}
                      </div>
                    </ListItem>
                    <Divider />
                  </Paper>
                );
              })}
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
};

export default FlightListView;
