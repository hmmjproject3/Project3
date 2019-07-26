import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import Form from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'
import Hamza from '../../../assets/hamza.png'
import Jennifer from '../../../assets/jennifer.png'
import Matthew from '../../../assets/matthew.png'
import Marianna from '../../../assets/marianna.png'
import Button from '@material-ui/core/Button'
import ChoresContext from '../../../utils/ChoresContext'



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    fontFamily: 'roboto'
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
  },
  textField: {
    backgroundColor: '#dce2e9',
    width: '350px'
  },
  // form - focused input text
  cssFocused: {
    color: '#153B69 !important',
    borderColor: '#153B69'
  },
  // form - focused text field outline
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#FFBA00 !important`,
      border: '2px solid'
    }
  },
}))

const Claimed = _ => {
  const classes = useStyles()
  const [addView, toggleAddView] = useState(false)
  const { childArr, handleInputChange, assignReward, rewardsArr, addReward } = useContext(ChoresContext)
  // const [editing, updateEdits] = useState({
  //   id: false
  // })

  return (
    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='claimedChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>Claimed</p>
        </Grid>
        <Grid item id='claimedChoresBody' xs={12} style={{ height: '250px', backgroundColor: 'white', overflowY: 'auto' }}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#153B69', width: '70px' }}>Reward</TableCell>
                <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Cheddar</TableCell>
                <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Claimed By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody >
                { rewardsArr ?
                rewardsArr.filter(reward => reward.isClaimed === true).map(eachReward => (
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  {eachReward.name}
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>{eachReward.points}</TableCell>
                <TableCell align="left">
                <Avatar
                className={classes.avatar}
                style={{
                  color: '#fff',
                  backgroundColor: `${eachReward.child.color}`,
                  height: 28,
                  width: 28,
                  marginRight: '5px',
                  display: 'inline-flex',
                  fontSize: '15px'
                }}>{eachReward.child.name[0]}</Avatar>
                </TableCell>
                </TableRow> )) : null
              }
            </TableBody>
          </Table> 
        </Grid>

      </Paper>
    </div>
  )
}

export default Claimed