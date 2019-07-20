import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#153B69',
        padding: theme.spacing(0, 0),
        width: 'auto'
    },
  }))

const BonusChores = _ => {
  const classes = useStyles()

  return (
    <div>
        <Paper style={{marginTop: '10px'}} className={classes.root}>
            <Grid item id='bonusChoresHead' xs={12} style={{height: '50px', color: 'white', fontSize: '25px', textAlign: 'left'}}>
                <p style={{margin: '0px', padding: '10px'}}>Bonus Chores</p>
                </Grid>
            <Grid item id='bonusChoresBody' xs={12} style={{height: '250px', backgroundColor: 'white'}}>
            <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell style={{color: '#153B69', width: '20px', paddingRight: '10px'}}>Name</TableCell>
              <TableCell style={{color: '#153B69', width: '20px'}} align="left">Cheddar</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
          {/* {rows.map(row => ( */}
            <TableRow key='row.name'>
              <TableCell component="th" scope="row">
                Wash Car
              </TableCell>
              <TableCell align="left" style={{color: '#FF9300'}}>500</TableCell>
            </TableRow>
            </TableBody>
          </Table>
            </Grid>
        </Paper>
    </div>
  )
}

export default BonusChores