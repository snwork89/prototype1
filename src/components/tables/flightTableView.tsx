import {FlightTypes} from "../types/flight";
import FlightData from "../../data/flightes.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import createFlightData from "../../utils/createFlightData";
import OverBookingDataJson from "../../data/overbooking.json";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import createOverBookingData from "../../utils/createOverBookingData";
import {overBooking} from "../types/overbooking";
import { Dispatch,SetStateAction } from "react";
import renderBackGroundColor from "../../utils/renderBackGroundColor";


interface FlightTableViewProps{
  selectedFlightOverBooking:overBooking[],
  setSelectedFlightOverBookingy: Dispatch<SetStateAction<overBooking[]>>,
}
const FlightTableView = (props:FlightTableViewProps) => {
 

  let rows: FlightTypes[] = [];
  let overBookingData: overBooking[] = [];
  FlightData.forEach((flight: FlightTypes) => {
    rows.push(createFlightData(flight));
  });



  OverBookingDataJson.forEach((data:overBooking)=>{
 
    overBookingData.push(createOverBookingData(data));
  });

  const handleTableRowClick = (flightNumber:Number) => {
    let filteredBookingdata = overBookingData && Array.isArray(overBookingData) && overBookingData.filter((x: overBooking) => x.flightId == flightNumber);
  
    props.setSelectedFlightOverBookingy(filteredBookingdata ? [...filteredBookingdata] : []);
   

  }
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Flight</TableCell>
            <TableCell align="right">Segement</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Week</TableCell>
            <TableCell align="right">Priorday</TableCell>
            <TableCell align="right">Overbook</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row:FlightTypes) => (
            <TableRow key={row.time} style={{backgroundColor:renderBackGroundColor(row.flight,props.selectedFlightOverBooking)}} onClick={()=>handleTableRowClick(row.flight)}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.flight}</TableCell>
              <TableCell align="right">{row.segement}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.day}</TableCell>
              <TableCell align="right">{row.week}</TableCell>
              <TableCell align="right">{row.priorday}</TableCell>
              <TableCell align="right">{row.overbook}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FlightTableView;
