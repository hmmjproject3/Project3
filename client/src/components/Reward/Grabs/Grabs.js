import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto'
  },
  addBtn: {
    backgroundColor: '#153B69',
    minHeight: 0,
    height: 30,
    width: 30,
  },
  addIcon: {
    color: 'white',
    height: 20,
    width: 20,
  }
}))

const UpForGrabs = _ => {
  const classes = useStyles()

  return (
    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='claimedChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>Up For Grabs</p>
        </Grid>
        <Grid item id='claimedChoresBody' xs={12} style={{ height: '300px', backgroundColor: 'white' }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#153B69', width: '70px' }}>Reward</TableCell>
                <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Cheddar</TableCell>
                <TableCell style={{ color: '#153B69', width: '20px' }} align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => ( */}
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  $100 Cash
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>500</TableCell>
                <TableCell align="left">
                  <Fab size='small' aria-label="Add" className={classes.addBtn}>
                    <AddIcon className={classes.addIcon} />
                  </Fab>
                </TableCell>
              </TableRow>
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  Really Cool Gift
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>5000</TableCell>
                <TableCell align="left">
                  <Fab size='small' aria-label="Add" className={classes.addBtn}>
                    <AddIcon className={classes.addIcon} />
                  </Fab>
                </TableCell>
              </TableRow>
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  $100 Cash
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>500</TableCell>
                <TableCell align="left">
                  <Fab size='small' aria-label="Add" className={classes.addBtn}>
                    <AddIcon className={classes.addIcon} />
                  </Fab>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button style={{ paddingLeft: '50px', paddingRight: '50px', color: 'white', backgroundColor: '#FFBA00', marginTop: '15px', width: 'auto'}}>Create New</Button>
        </Grid>
      </Paper>
    </div>
  )
}

export default UpForGrabs