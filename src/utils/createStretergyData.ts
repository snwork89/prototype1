import { strategies } from "../components/types/strategies";

export default function createData({
    create_user_id,
    data,
    days_before_departure,
    id,
    market_group_id,
    meta,
    name,
 
    seat_units,
    seats,
    timestamp,
    type,
    update_user_id,
  }: strategies) {
    return {
        create_user_id,
        data,
        days_before_departure,
        id,
        market_group_id,
        meta,
        name,
     
        seat_units,
        seats,
        timestamp,
        type,
        update_user_id,
    };
  }