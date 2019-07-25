import React, { useState } from 'react'
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



const ActiveChore = _ => {
  const classes = useStyles()
  const [addView, toggleAddView] = useState(false)
  // const [editing, updateEdits] = useState({
  //   id: false
  // })

  return (
    <div>
      <Paper style={{ marginTop: '10px' }} className={classes.root}>
        <Grid item id='claimedChoresHead' xs={12} style={{ height: '50px', color: 'white', fontFamily: 'roboto', fontSize: '25px', textAlign: 'left' }}>
          <p style={{ margin: '0px', padding: '10px' }}>Chores In Progress</p>
        </Grid>
        <Grid item id='claimedChoresBody' xs={12} style={{ height: '300px', backgroundColor: 'white' }}>
          {!addView ? <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: '#153B69', width: '70px' }}>Name</TableCell>
                <TableCell style={{ color: '#153B69', width: '10px' }} align="left">Cheddar</TableCell>
                <TableCell style={{ color: '#153B69', width: '20px' }} align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map(row => ( */}
              <TableRow key='row.name'>
                <TableCell component="th" scope="row">
                  Washing the Windows
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
                  Detail the Cars
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
                  Water the Plants
              </TableCell>
                <TableCell align="left" style={{ color: '#FF9300' }}>500</TableCell>
                <TableCell align="left">
                  <Fab size='small' aria-label="Add" className={classes.addBtn}>
                    <AddIcon className={classes.addIcon} />
                  </Fab>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table> :
          <div>
            <Form style={{ marginBottom: '10px', marginTop: '5px', marginRight: '10px', marginLeft: '10px', height: '200px', width: 'auto' }}>
              <p style={{ marginTop: '20px', marginBottom: '10px', textAlign: 'center', fontSize: '20px', color: '#153B69' }}>Create a New Reward</p>
              <TextField
                id="outlined-name"
                label="Reward Name"
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
            </Form>
          </div>}
        </Grid>
      </Paper>
    </div>
  )
}


export default ActiveChore