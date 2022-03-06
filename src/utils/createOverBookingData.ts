import { overBooking } from "../components/types/overbooking";

export default function createData({
    create_user_id,
    data,
    days_before_departure,
    flights_cnt,
    id,
    market_group_id,
    meta,
    name,
    rules_cnt,
    seat_units,
    seats,
    timestamp,
    type,
    update_user_id,
    flightId
  }: overBooking) {
    return {
      create_user_id,
      data,
      days_before_departure,
      flights_cnt,
      id,
      market_group_id,
      meta,
      name,
      rules_cnt,
      seat_units,
      seats,
      timestamp,
      type,
      update_user_id,
      flightId
    };
  }