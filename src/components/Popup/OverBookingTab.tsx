import { useState } from "react";
import Grid from "@mui/material/Grid";
import NewStratergyTable from "./NewStratergyTable";
import OverBookingList from "./OverBookingList";
import { overBooking } from "../types/overbooking";
import { strategies } from "../types/strategies";

interface overBookingTabProps {
  selectedFlightOverBooking: overBooking[] | [];
}

export default function OverBookingTab(props: overBookingTabProps) {
  const [selectedStratergy, setSelectedStratergy] = useState<
    strategies | undefined
  >(undefined);
  return (
    <Grid container spacing={2} overflow="hidden">
      <Grid item xs={5}>
        <OverBookingList
          selectedFlightOverBooking={props.selectedFlightOverBooking}
          setSelectedStratergy={setSelectedStratergy}
          selectedStratergy={selectedStratergy}
        />
      </Grid>
      <Grid item xs={7}>
        <div>{selectedStratergy && selectedStratergy.name}</div>
        <NewStratergyTable />
      </Grid>
    </Grid>
  );
}
