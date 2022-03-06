import { useState, Dispatch, SetStateAction } from 'react'
import { Grid, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import stratergyDataJson from '../../data/strategies.json';
import { strategies } from '../types/strategies';
import createStretergyData from '../../utils/createStretergyData';


interface CusotmItem {
  overBookingName: String,
  id: Number,
  selectedStratergy: strategies | undefined,
  setSelectedStratergy: Dispatch<SetStateAction<strategies | undefined>>,

}

const CustomeListItem = (props: CusotmItem) => {
  let strategyData: strategies[] = [];
  stratergyDataJson.forEach((stratergy: strategies) => {
    strategyData.push(createStretergyData(stratergy));
  });


  const handleOnClick = () => {
 
    let foundStretergy = strategyData.find((x: strategies) => x.id == props.id);
    if (foundStretergy) {
      props.setSelectedStratergy(foundStretergy);
    }
    else {
      props.setSelectedStratergy(undefined);
    }

  }

  return (
    <Grid container spacing={2} style={{ backgroundColor: props.selectedStratergy?.id == props.id ? "grey" : "white" }}>
      <Grid item container xs={8}>
        <ListItemText primary={props.overBookingName} onClick={handleOnClick} />


      </Grid>
      <Grid item container xs={4} spacing={2}>
        <Grid item xs={12}><EditIcon /></Grid>
        <Grid item xs={12}><ContentCopyIcon /></Grid>

      </Grid>

    </Grid>
  )
}

export default CustomeListItem;