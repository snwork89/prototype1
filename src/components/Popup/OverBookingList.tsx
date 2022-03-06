import React, { Dispatch, SetStateAction, useEffect } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import OverBooking from "../../data/overbooking.json";
import CustomeListItem from "./CustomeListItem";
import { overBooking } from "../types/overbooking";
import { strategies } from "../types/strategies";
import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  listStyle: {
    overflowY: "scroll",
  },
  overbookingHeading: {
    fontSize: "28px",
  },
  emptyBox: {
    height: "20px",
  },
});

interface overBookingListProps {
  selectedFlightOverBooking: overBooking[] | [];
  selectedStratergy: strategies | undefined;
  setSelectedStratergy: Dispatch<SetStateAction<strategies | undefined>>;
}

export default function OverBookingList(props: overBookingListProps) {
  const classes = useStyles();


  return (
    <List
      sx={{
        overflow: "auto",
      }}
    >
      <ListItem
        secondaryAction={
          <>
            <SearchIcon />
            <FilterListIcon />
            <AddIcon />
          </>
        }
      >
        <Box className={classes.overbookingHeading}>Overbooking Tactics</Box>
      </ListItem>

      <Box className={classes.emptyBox}></Box>

      {props.selectedFlightOverBooking.map((item: overBooking) => (
        <React.Fragment key={item.id}>
          <ListItem>
            <CustomeListItem
              overBookingName={item.name}
              id={item.id}
              setSelectedStratergy={props.setSelectedStratergy}
              selectedStratergy={props.selectedStratergy}
            />
          </ListItem>

          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}
