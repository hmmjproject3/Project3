import React, { useContext, useRef } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import ChoresContext from '../../utils/ChoresContext'
import Form from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#153B69',
    padding: theme.spacing(0, 0),
    width: 'auto',
    fontFamily: 'roboto'
  },

  pageCont: {
    backgroundColor: 'white',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
    },
  },

  formCont: {
    marginBottom: '50px', 
    marginTop: '20px', 
    // marginRight: '50px', 
    // marginLeft: '50px', 
    margin: 'auto',
    height: '330px', 
    width: '80%', 
    backgroundColor: 'white',
  },

  formHeader: {
    width: 'auto',
    marginTop: '30px', 
    textAlign: 'center', 
    fontSize: '20px', 
    color: '#153B69',
  },

  table: {
    width: '100%',
    overflowX: 'auto',
    minWidth: 300
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

const AddKidChores = _ => {
  const classes = useStyles()
  const { handleInputChange, addChore, choreName, cheddarReward } = useContext(
    ChoresContext
  )

  return (
    <div className={classes.pageCont}>
      <Form className={classes.formCont}>
        <p className={classes.formHeader}>Assign a New Chore</p>
        <TextField
          id='outlined-name'
          label='Task Name'
          className={classes.input}
          margin='normal'
          variant='outlined'
          id='choreName'
          onChange={handleInputChange}
          value={choreName}
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

          id='outlined-name'
          label='Points'
          className={classes.input}
          margin='normal'
          variant='outlined'
          id='cheddarReward'
          onChange={handleInputChange}
          value={cheddarReward}
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
    </div>

  )
}

export default AddKidChores
