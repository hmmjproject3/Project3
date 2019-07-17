import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#153B69',
        padding: theme.spacing(0, 0),
        width: 'auto'
    },
  }))

const SquadGoals = _ => {
  const classes = useStyles()

  return (
    <div>
        <Paper className={classes.root}>
            <Grid item id='squadGoalsHead' xs={12} style={{height: '50px', color: 'white', textAlign: 'left'}}>
                <h3 style={{padding: '10px', paddingTop: '13px'}}>Squad Goals</h3>
                </Grid>
            <Grid item id='squadGoalsBody' xs={12} style={{height: '200px', backgroundColor: 'white'}} ></Grid>
        </Paper>
    </div>
  )
}

export default SquadGoals