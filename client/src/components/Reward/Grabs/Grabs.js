import React, { useState, useContext } from 'react'
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
import Form from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import ChoresContext from '../../../utils/ChoresContext'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    fontFamily: 'roboto'
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







const UpForGrabs = _ => {
  const { childArr, handleInputChange, assignReward, rewardsArr, addReward } = useContext(ChoresContext)
  const classes = useStyles()
  const [addView, toggleAddView] = useState(false)
  // const [editing, updateEdits] = useState({
  //   id: false
  // })
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {

    // console.log(childArr)
    setAnchorEl(event.currentTarget);

  }

  function handleClose() {
    setAnchorEl(null);
  }

  const toggleThenAddReward= event => {
    toggleAddView(!addView)
  
    if (addView) {
      addReward(event)
    }
  }


  // console.log(childArr)

  return (

    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='claimedChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>Up For Grabs</p>
        </Grid>
        <Grid item id='claimedChoresBody' xs={12} style={{ height: '250px', backgroundColor: 'white' }}>

          {!addView ?

            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: '#153B69', width: '70px' }}>Reward</TableCell>
                  <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Cheddar</TableCell>
                  <TableCell style={{ color: '#153B69', width: '20px' }} align="left"></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rewardsArr ?
                  rewardsArr.filter(reward => reward.isClaimed === false).map(eachReward => (
                    <TableRow key='row.name'>
                      <TableCell component="th" scope="row">
                        {eachReward.name}
                      </TableCell>
                      <TableCell align="left" style={{ color: '#FF9300' }}>{eachReward.points}</TableCell>
                      <TableCell align="left">
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

                          <Fab size='small' aria-label="Add" className={classes.addBtn}>
                            <AddIcon className={classes.addIcon} />
                          </Fab>
                        </Button>


                        <Menu
                          id="customized-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >

                          {
                            // console.log(childArr)
                            childArr.map(child => (
                              <MenuItem id={child._id} rewardid={eachReward._id} onClick={event => { assignReward(event); handleClose() }}>
                                {child.name}
                              </MenuItem>
                            ))
                          }
                        </Menu>
                      </TableCell>
                    </TableRow>




                  )) : null}
              </TableBody>

            </Table>

            :


            <div>
              <Form style={{ marginBottom: '50px', marginTop: '20px', marginRight: '50px', marginLeft: '50px', height: '200px', width: 'auto' }}>
                <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '20px', color: '#153B69' }}>Create a New Bonus Chore</p>
                <TextField
                  id="rewardName"
                  onChange={handleInputChange}
                  label="Task Name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssInput,
                      focused: classes.cssFocused,
                      underline: classes.cssUnderline,
                    },
                  }}
                />
                <TextField

                  id="rewardAmount"
                  onChange={handleInputChange}
                  label="Points"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssInput,
                      focused: classes.cssFocused,
                    },
                  }}
                />
              </Form>
            </div>}

        </Grid>
      </Paper>
      <Button
        className={classes.margin}
        onClick={(event) => toggleThenAddReward(event)}
        style={{
          paddingLeft: '50px',
          paddingRight: '50px',
          color: 'white',
          backgroundColor: '#FFBA00',
          marginTop: '20px',
          width: 'auto'
        }}>
        Create New
          </Button>
    </div>
  )
}


export default UpForGrabs