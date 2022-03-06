import { FlightTypes } from "../components/types/flight";

export default function createData({
  
    id,
    flight,
    segement,
    date,
    time,
    day,
    week,
    priorday,
    overbook,
  }: FlightTypes) {
    return {
     
      id,
      flight,
      segement,
      date,
      time,
      day,
      week,
      priorday,
      overbook,
    };
  }