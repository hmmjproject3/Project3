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
import Avatar from '@material-ui/core/Avatar'
// import Hamza from '../../../assets/hamza.png'
// import Jennifer from '../../../assets/jennifer.png'
// import Matthew from '../../../assets/matthew.png'
// import Marianna from '../../../assets/marianna.png'
import Button from '@material-ui/core/Button'



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

const ProfileComplete = _ => {
  const classes = useStyles()

  return (
    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='completeChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>Completed Chores</p>
        </Grid>
        <Grid item id='completeChoresBody' xs={12} style={{ height: '300px', backgroundColor: 'white' }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#153B69', width: '200px' }}>Name</TableCell>
                <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Cheddar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => ( */}
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  Mow the Lawn
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>300</TableCell>
                <TableCell align="left">
                  {/* <Avatar className={classes.iconLeft} style={{ backgroundColor: '#968AF2' }}> */}
                    {/* <img className={classes.avatar} alt="Avatar" src={Marianna} /> */}
                  {/* </Avatar> */}
                </TableCell>
              </TableRow>
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  Clean the Pool
              </TableCell>
                <TableCell align="center" style={{ color: '#FF9300' }}>5000</TableCell>
                <TableCell align="center">
                  {/* <Avatar className={classes.iconLeft} style={{ backgroundColor: '#FFBA00' }}> */}
                    {/* <img className={classes.avatar} alt="Avatar" src={Hamza} /> */}
                  {/* </Avatar> */}
                </TableCell>
              </TableRow>
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  Mopping the floor
              </TableCell>
                <TableCell align="center" style={{ color: '#FF9300' }}>500</TableCell>
                <TableCell align="center">
                  {/* <Avatar className={classes.iconLeft} style={{ backgroundColor: '#60B0F5' }}> */}
                    {/* <img className={classes.avatar} alt="Avatar" src={Matthew} /> */}
                  {/* </Avatar> */}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    </div>
  )
}

export default ProfileComplete