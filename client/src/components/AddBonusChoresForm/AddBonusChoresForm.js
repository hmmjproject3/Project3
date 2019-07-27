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
  formHeader: {
    marginTop: 10,
    width: 'auto'
  },
  textField: {
    backgroundColor: '#dce2e9',
    width: '350px'
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
    // <Container component="main" maxWidth="xs">
    //   <form noValidate>
    //     <Grid container spacing={2}>
    //       <Grid item xs={12}>
    //         <TextField
    //           autoComplete="name"
    //           name="Name"
    //           variant="outlined"
    //           required
    //           fullWidth
    //           id="choreName"
    //           value={choreName}
    //           // ref={choreName}
    //           onChange={handleInputChange}
    //           label="Name"
    //           // autoFocus
    //         />
    //       </Grid>
    //       <Grid item xs={12}>
    //         <TextField
    //           autoComplete="userName"
    //           name="userName"
    //           variant="outlined"
    //           required
    //           fullWidth
    //           id="cheddarReward"
    //           value={cheddarReward}
    //           // ref={cheddarReward}
    //           onChange={handleInputChange}
    //           label="User Name"
    //           // autoFocus
    //         />
    //       </Grid>
    //     </Grid>
  // 	</form>
  // 	  </Container>
    <div style={{ backgroundColor: 'white' }}>
      <Form style={{ marginBottom: '50px', marginTop: '20px', marginRight: '50px', marginLeft: '50px', height: '330px', width: 'auto', backgroundColor: 'white' }}>
        <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '20px', color: '#153B69' }}>Assign a Bonus Chore</p>
        <TextField
          id='outlined-name'
          label='Task Name'
          className={classes.textField}
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
          className={classes.textField}
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
