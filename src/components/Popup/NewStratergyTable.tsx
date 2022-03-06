import React from 'react';
import {strategies} from '../types/strategies';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    customTable: {
        width: "70%",
        color: "grey",
        marginTop:"15px",
        border: "1px solid #c1b7b7",
        borderSpacing: 0,
        '& tbody': {
            '& tr': {
                '& td': {
                    width:"25%",
                    border: '1px solid #c1b7b7'
                }

            }
        }
    },
});


const NewStratergyTable = () => {
    const classes = useStyles();
    const renderDoubleValue = (a1: Number, a2: Number) => {
        return (
            <React.Fragment>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        {a1}
                    </Grid>
                    <Grid item xs={7}>

                    </Grid>

                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={7}>

                    </Grid>
                    <Grid item xs={5}>
                        {a2}
                    </Grid>

                </Grid>
            </React.Fragment>

        );
    }
    return (
        <table className={classes.customTable}>
            <tbody>
                <tr>
                    <td align="center">DP</td>
                    <td align="center">
                        {renderDoubleValue(355, 355)}
                    </td>
                    <td align="center">      {renderDoubleValue(354, 354)}</td>
                    <td align="center">      {renderDoubleValue(353, 0)}</td>
                </tr>
                <tr>
                    <td align="center"><Grid container spacing={1}>
                        <Grid item xs={12}>
                            Overbooking
                        </Grid>
                        <Grid item xs={12}>
                            %
                        </Grid>

                    </Grid></td>
                    <td align="center">  </td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td align="center">Abs Value</td>
                    <td align="center"></td>
                    <td align="center"></td>
                    <td align="center"></td>
                </tr>
                <tr>
                    <td align="center">Force</td>
                    <td align="center"><input type="checkbox" /></td>
                    <td align="center"><input type="checkbox" /></td>
                    <td align="center"><input type="checkbox" /></td>
                </tr>

            </tbody>
        </table>
    )
}


export default NewStratergyTable;