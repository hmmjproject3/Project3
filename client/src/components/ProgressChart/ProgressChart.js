import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#153B69',
        padding: theme.spacing(0, 0),
    },
  }))

const ProgressChart = _ => {
  const classes = useStyles()

  return (
    <div>
        <Paper className={classes.root}>
            <Grid item id='progressHead' xs={12} style={{height: '50px', color: 'white', textAlign: 'left'}}>
                <h3 style={{padding: '10px', paddingTop: '13px'}}>Progress Chart</h3>
                </Grid>
            <Grid item id='progressBody' xs={12} style={{height: '200px', backgroundColor: 'white'}} ></Grid>
        </Paper>
    </div>
  )
}

export default ProgressChart