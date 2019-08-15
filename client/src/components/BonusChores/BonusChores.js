import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    marginTop: '10px'
  },

  bonusChoresHead: {
    height: '50px', 
    color: 'white',
    fontFamily: 'roboto', 
    fontSize: '25px', 
    textAlign: 'left',
  },

  bonusChoresBody: {
    height: '250px', 
    backgroundColor: 'white',
  },

  bonusTableCell: {
    color: '#153B69', 
    width: '20px',
  },
}))

const BonusChores = _ => {
  const classes = useStyles()

  return (
    <div>
      <Paper className={classes.root}>
        <Grid item className={classes.bonusChoresHead} xs={12}>
          <p style={{ margin: '0px', padding: '10px' }}>Bonus Chores</p>
        </Grid>
        <Grid item className={classes.bonusChoresBody} xs={12} style={{ }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.bonusTableCell}>Task</TableCell>
                <TableCell className={classes.bonusTableCell} align='left'>Cheddar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='row.name'>
                <TableCell component='th' scope='row'>
                Wash Car
                </TableCell>
                <TableCell align='left' style={{ color: '#FF9300' }}>500</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </div>
  )
}

export default BonusChores
