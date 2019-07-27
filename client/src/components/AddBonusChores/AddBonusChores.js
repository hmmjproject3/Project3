import React, { useState } from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Form from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar'
import Hamza from '../../assets/hamza.png'
import Jennifer from '../../assets/jennifer.png'
import Matthew from '../../assets/matthew.png'
import Marianna from '../../assets/marianna.png'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    fontFamily: 'roboto'
  },
  taskEdit: {
    border: '1px solid #153B69',
    borderRadius: '4px',
  },
  pointsEdit: {
    border: '1px solid #153B69',
    borderRadius: '4px',
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
  editIcon: {
    color: 'white',
    height: 20,
    width: 20,
  },
  delBtn: {
    backgroundColor: '#ED4F4F',
    minHeight: 0,
    height: 30,
    width: 30,
  },
  editBtn: {
    backgroundColor: '#153B69',
    minHeight: 0,
    height: 30,
    width: 30,
  },
  delIcon: {
    color: 'white',
    height: 20,
    width: 20,
  },
  avatar: {
    height: 30,
    width: 30,
  },
  iconLeft: {
    height: 30,
    width: 30,
  },
  formHeader: {
    marginTop: 10,
    width: 'auto',
  },
  textField: {
    backgroundColor: '#dce2e9',
    width: '350px'
  },
  cssFocused: {
    color: '#153B69 !important',
  },
}))

const BonusChores = _ => {
  const classes = useStyles()
  const [addView, toggleAddView] = useState(false)
  const [editing, updateEdits] = useState({
    id: false
  })

  function toggleEdit(id) {
    updateEdits({
      ...editing,
      [id]: !editing[id]
    })
  }

  return (
    <>
      <Paper className={classes.root}>
        <Grid item id='bonusChoresHead' xs={12} style={{ height: '50px', color: 'white', textAlign: 'left' }}>
          <p style={{ paddingTop: '10px', fontSize: '25px', padding: '10px' }}>Bonus Chores</p>
        </Grid>
        <Grid item id='bonusChoresBody' xs={12} style={{ height: '400px', backgroundColor: 'white', overflowY: "auto" }}>

          {!addView ? <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#153B69', width: '250px', paddingRight: '15px' }}>Task</TableCell>
                <TableCell style={{ color: '#153B69', width: '100px', paddingRight: '15px' }} align="left">Cheddar</TableCell>
                <TableCell style={{ color: '#153B69', width: '80px', paddingRight: '20px', paddingLeft: '5px' }} align="left">Claim</TableCell>
                <TableCell style={{ color: '#153B69', width: '5px', paddingRight: '0px' }} align="left"></TableCell>
                <TableCell style={{ color: '#153B69', width: '5px' }} align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => ( */}
              {editing["1"] ?
                <TableRow key='row.name'>
                  <TableCell component="th" scope="row" style={{ paddingRight: '5px' }}>
                    <input className={classes.taskEdit}></input>
                  </TableCell>
                  <TableCell align="left" style={{ color: '#FF9300', paddingRight: '5px' }}>
                    <input className={classes.pointsEdit}></input>
                  </TableCell>
                  <TableCell align="left" style={{ color: '#60B0F5', fontWeight: 'bold', paddingLeft: '5px', paddingRight: '5px' }}>
                    <Fab size='small' aria-label="Add" className={classes.addBtn}>
                      <AddIcon className={classes.addIcon} />
                    </Fab>

                  </TableCell>
                  <TableCell style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                    <Fab onClick={() => toggleEdit("1")} color="secondary" aria-label="Edit" className={classes.editBtn}>
                      <Icon className={classes.editIcon}>edit_icon</Icon>
                    </Fab>
                  </TableCell>
                  <TableCell style={{ paddingLeft: '5px', paddingRight: '20px' }}>
                    <Fab aria-label="Delete" className={classes.delBtn}>
                      <DeleteIcon className={classes.delIcon} />
                    </Fab>
                  </TableCell>
                </TableRow>
                :
                <TableRow key='row.name'>
                  <TableCell component="th" scope="row" style={{ color: '#153B69', paddingRight: '5px' }}>Wash the car</TableCell>
                  <TableCell align="left" style={{ color: '#FF9300', paddingRight: '5px' }}>300</TableCell>
                  <TableCell align="left" style={{ color: '#60B0F5', fontWeight: 'bold', paddingLeft: '5px', paddingRight: '5px' }}>
                    <Fab size='small' aria-label="Add" className={classes.addBtn}>
                      <AddIcon className={classes.addIcon} />
                    </Fab>
                  </TableCell>
                  <TableCell style={{ paddingRight: '5px', paddingLeft: '5px' }}>
                    <Fab onClick={() => toggleEdit("1")} color="secondary" aria-label="Edit" className={classes.editBtn}>
                      <Icon className={classes.editIcon}>edit_icon</Icon>
                    </Fab>
                  </TableCell>
                  <TableCell style={{ paddingLeft: '5px' }}>
                    <Fab aria-label="Delete" className={classes.delBtn}>
                      <DeleteIcon className={classes.delIcon} />
                    </Fab>
                  </TableCell>
                </TableRow>
              
              }
            </TableBody>
          </Table> :
            <div>
              <Form style={{ marginBottom: '50px', marginTop: '20px', marginRight: '50px', marginLeft: '50px', height: '200px', width: 'auto' }}>
                <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '20px', color: '#153B69' }}>Create a New Bonus Chore</p>
                <TextField
                  id="outlined-name"
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

                  id="outlined-name"
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
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Fab
          className={classes.margin}
          onClick={() => toggleAddView(!addView)}
          style={{
            padding: 'auto',
            color: 'white',
            backgroundColor: '#FFBA00',
            marginTop: '15px',
          }}>
          <AddIcon />

        </Fab>
      </Grid>
    </>
  )
}

export default BonusChores