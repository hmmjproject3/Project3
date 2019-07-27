import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'typeface-roboto'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
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
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    fontFamily: 'roboto'
  },
  addBtn: {
    backgroundColor: '#FFBA00',
    minHeight: 0,
    height: 30,
    width: 30
  },
  addIcon: {
    color: 'white',
    height: 20,
    width: 20
  },
  textField: {
    backgroundColor: '#dce2e9',
    width: '350px'
  },

  // focused and unfocused text field label
  cssLabel: {
    '&$cssFocused': {
      color: '#153B69',
      fontWeight: 'bold'
    }
  },

  // unfocused text field outline
  notchedOutline: {
    border: '1 px'
  },

  // unfocused and focused text field outline
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#153B69 !important`,
      border: '2px solid'
    },
    // this contols the hover color of the text fields
    '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
      borderColor: '#153B69'
    }
  },

  // focused input text
  cssFocused: {
    color: '#153B69'
  }
}))

const UpForGrabs = _ => {
  const { childArr, handleInputChange, assignReward, rewardsArr, addReward } = useContext(ChoresContext)
  const classes = useStyles()
  const [addView, toggleAddView] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    // console.log(childArr)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleThenAddReward = event => {
    toggleAddView(!addView)

    if (addView) {
      addReward(event)
    }
  }

  return (

    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='claimedChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>Up For Grabs</p>
        </Grid>
        <Grid item id='claimedChoresBody' xs={12} style={{ height: '220px', backgroundColor: 'white', overflowY: 'auto' }}>

          {!addView

            ? <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: '#153B69', width: '70px' }}>Reward</TableCell>
                  <TableCell style={{ color: '#153B69', width: '10px' }} align='left'>Cheddar</TableCell>
                  <TableCell style={{ color: '#153B69', width: '20px' }} align='left' />
                </TableRow>
              </TableHead>

              <TableBody>
                {rewardsArr
                  ? rewardsArr.filter(reward => reward.isClaimed === false).map(eachReward => (
                    <TableRow key='row.name'>
                      <TableCell component='th' scope='row'>
                        {eachReward.name}
                      </TableCell>
                      <TableCell align='left' style={{ color: '#FF9300' }}>{eachReward.points}</TableCell>
                      <TableCell align='left'>
                        <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>

                          <Fab size='small' aria-label='Add' className={classes.addBtn}>
                            <AddIcon className={classes.addIcon} />
                          </Fab>
                        </Button>

                        <Menu
                          id='customized-menu'
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >

                          {
                           
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

            : <div>
              <Form style={{ marginBottom: '50px', marginRight: '50px', marginLeft: '50px', height: '200px', width: 'auto' }}>
                <p style={{ textAlign: 'center', fontSize: '20px', color: '#153B69', marginBottom: '10px' }}>Create a Reward</p>
                <TextField
                  id='rewardName'
                  onChange={handleInputChange}
                  label='Task Name'
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      hover: classes.cssHover,
                      notchedOutline: classes.notchedOutline
                    },
                    inputMode: 'numeric'
                  }}
                />
                <TextField

                  id='rewardAmount'
                  onChange={handleInputChange}
                  label='Points'
                  className={classes.textField}
                  margin='normal'
                  variant='outlined'
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      hover: classes.cssHover,
                      notchedOutline: classes.notchedOutline
                    },
                    inputMode: 'numeric'
                  }}
                />
              </Form>
            </div>}

        </Grid>
      </Paper>
      <div style={{ textAlign: "center", backgroundColor: '#F5F5F5' }}>

      <Fab
        className={classes.margin}
        onClick={(event) => toggleThenAddReward(event)}
        style={{
          color: 'white',
          backgroundColor: '#153B69',
          marginTop: '15px',
          marginBottom: '15px',
        }}>
         <AddIcon />

          </Fab>
          </div>
    </div>
  )
}

export default UpForGrabs
