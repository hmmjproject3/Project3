import react from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto'
  }
}))

const manageBonus = _ => {
  const classes = useStyles()
  return (
    <div>
      <Paper className={classes.root}>
        <Grid item id='manageBonushead' xs={12} style={{ height: '50px', color: 'white', textAlign: 'right' }}>
          <h3 style={{ padding: '10px', paddingTop: '13px' }}>manageBonus</h3>
        </Grid>
        <Grid item id='manageBonusbody' xs={12} style={{ height: '200px', backgroundColor: 'white' }} />
      </Paper>
    </div>
  )
}

export default manageBonus
