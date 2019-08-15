import React, { useContext, useState } from 'react'
import Home from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import Fab from '@material-ui/core/Fab'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import ChoresContext from '../../utils/ChoresContext'
import randomColor from 'randomcolor'

const useStyles = makeStyles(theme => ({

  iconsright: {
    backgroundColor: '#24537f',
    color: '#E4ECF2',
    marginRight: 10,
    height: 48,
    width: 48,
    display: 'inline-flex'
  },

  container: {
    marginTop: '60px', 
    marginLeft: '200px', 
    marginRight: '200px', 
    backgroundColor: '#24537f', 
    width: 'auto', 
    maxWidth: '100%', 
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 15,
      marginRight: 15,
      textAlign: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 40,
      marginLeft: 100,
      marginRight: 100,
      textAlign: 'center',
    },
  },

  headline: {
    fontFamily: 'roboto', 
    fontSize: '25px', 
    fontWeight: 'bold', 
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      textAlign: 'center',
    },
  },

  subHead: {
    marginTop: '30px', 
    marginBottom: '25px', 
    textAlign: 'center', 
    color: 'white', 
    fontFamily: 'roboto', 
    fontWeight: 'bold', 
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      textAlign: 'center',
    },
  },

  addIcon: {
    minHeight: '0', 
    height: '30px', 
    width: '30px', 
    color: '#c12006', 
    backgroundColor: '#FFBA00', 
    marginLeft: '10px',
  },

  formContainer: {
    marginTop: '50px',
    width: '75%',
    margin: 'auto',
    overflowX: 'scroll',
  },

  clearCont: {
    paddingTop: '15px',
    [theme.breakpoints.down('sm')]: {
      writingMode: 'vertical-rl',
    }
  },

  clearBtn: {
    color: '#ff0000', 
    fontWeight: 'bold', 
    backgroundColor: '#24537f', 
    marginLeft: '0px',
    [theme.breakpoints.down('sm')]: {
      height: 30,
      width: 30,
      padding: 0,
    },
  },

  submit: {
    marginTop: '50px', 
    marginBottom: '50px', 
    width: '300px', 
    margin:'auto',
    backgroundColor: '#968AF2', 
    color: 'white', 
    fontFamily: 'roboto', 
    fontWeight: 'bold', 
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },

  // unfocused text field - label text
  cssLabel: {
    color: 'white'
  },

  // unfocused text field - input text
  cssInput: {
    color: 'white'
  },

  // text field - bottom border line
  cssUnderline: {
    borderBottom: '1px solid white',
    '&$cssFocused': {
      borderBottom: '2px solid #FFE200'
    }
  },

  // focused text field - label and input text
  cssFocused: {
    color: '#FFE200 !important',
    fontWeight: 'bold'
  }

}))

const ChildrenForm = _ => {
  const classes = useStyles()
  const { childArr, addChildren } = useContext(ChoresContext)
  const [inputs, setInputs] = useState([{ name: null, totalPoints: 0, color: '', parent: '' }])

  const handleChange = (i, event) => {
    const names = [...inputs]
    names[i].name = event.target.value
    names[i].totalPoints = 0
    names[i].color = randomColor({ luminosity: 'dark' })
    names[i].parent = localStorage.getItem('user')
    setInputs(names)
  }

  const handleAdd = _ => {
    const names = [...inputs]
    names.push({ name: null })
    setInputs(names)
  }

  const handleRemove = (i) => {
    const names = [...inputs]
    names.splice(i, 1)
    setInputs(names)
  }

  return (
    <>
      <div>
        <Link className={classes.link} to='/Dashboard'>
          <IconButton className={classes.iconsright}>
            <Home />
          </IconButton>
        </Link>
      </div>

      <Container className={classes.container} component='main' maxWidth='xs'>
        <CssBaseline />
        <Typography className={classes.headline}>TELL US ABOUT YOUR SQUAD
        </Typography>
        <Typography className={classes.subHead} variant='h6' gutterBottom>
        Add Children
          <Fab className={classes.addIcon} aria-label='Add' onClick={() => handleAdd()}>
            <AddIcon />
          </Fab>
          <br />
        </Typography>

        {inputs.map((input, idx) =>
          (
            <Grid container className={classes.formContainer} spacing={3} key={`${input}-${idx}`}>
              <Grid item xs={10} sm={10}>
                <TextField
                  className={classes.label}
                  classes={{ label: 'label' }}
                  required
                  id={`${idx}`}
                  label={`Child ${idx + 1} Name:`}
                  fullWidth
                  value={input.name || ''}
                  onChange={e => handleChange(idx, e)}
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused
                    }
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssInput,
                      focused: classes.cssFocused,
                      underline: classes.cssUnderline
                    }
                  }}
                />
              </Grid>

              <Grid item xs={2} sm={2} className={classes.clearCont}>
                <Fab className={classes.clearBtn} aria-label='Delete' onClick={() => handleRemove(idx)}>
                  <ClearIcon className={classes.clearIcon} />
                </Fab>

              </Grid>
            </Grid>
          )
        )}

        <Button
          type='button'
          fullWidth
          variant='contained'
          className={classes.submit}
          onClick={_ => addChildren(inputs)}
        >
        Submit
        </Button>
      </Container>
    </>
  )
}

export default ChildrenForm
