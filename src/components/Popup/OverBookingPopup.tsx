import React, { Dispatch, SetStateAction, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OverBookingTab from "./OverBookingTab";
import { overBooking } from "../types/overbooking";

interface OverBookingProps {
  selectedFlightOverBooking: overBooking[] | [];
}

export default function OverBookingPopup(props: OverBookingProps) {
  const [currentTab, setcurrentTab] = useState<Number>(0);

  const handleCurrentTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setcurrentTab(newValue);
  };

  const renderTabContent = () => {
    if (currentTab == 0) {
      return (
        <OverBookingTab
          selectedFlightOverBooking={props.selectedFlightOverBooking}
        />
      );
    }
  };
  return (
    <div>
      <Tabs value={0}>
        <Tab label="Current Selection" />
      </Tabs>

      <Tabs value={currentTab} onChange={handleCurrentTabChange}>
        <Tab label="OverBooking" />
      </Tabs>
      {renderTabContent()}
    </div>
  );
}
