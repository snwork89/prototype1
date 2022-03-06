import { overBooking } from "../components/types/overbooking";

export default function renderBackGroundColor(
  flightNumber: Number,
  selectedFlightOverBooking: overBooking[]
) {
  if (
    (selectedFlightOverBooking &&
    Array.isArray(selectedFlightOverBooking) &&
    selectedFlightOverBooking[0] &&
    selectedFlightOverBooking[0].flightId)==flightNumber
  ) {
    return "grey";
  } else {
    return "white";
  }
}
