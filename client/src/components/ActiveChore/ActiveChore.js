import React, { useContext, useState } from 'react'
import ChoresContext from '../../utils/ChoresContext'
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
    width: 'auto'
  },
  table: {
    width: '100%',
    overflowX: 'auto',
    minWidth: 300,
  },
  avatar: {
    height: 30,
    width: 30,
  },
  iconLeft: {
    height: 30,
    width: 30,
  }
}))

const ActiveChore = _ => {
  const { kidChoresArr } = useContext(ChoresContext)
  const classes = useStyles()

  return (
    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='completeChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>In Progress</p>
        </Grid>
        <Grid item id='completeChoresBody' xs={12} style={{ minHeight: '300px', backgroundColor: 'white' }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#153B69', width: '100px' }}>Task</TableCell>
                <TableCell style={{ color: '#153B69', width: '100px' }} align="left">Cheddar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflowX: 'scroll'}}>
              {kidChoresArr.map(({ isCompleted, name, points }) => {
                  if (isCompleted === false) {
                    return <TableRow key='row.name'>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="left" style={{ color: '#FF9300' }}>{points}</TableCell>
                    </TableRow>
                  }
                })}
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </div>
  )
}

export default ActiveChore