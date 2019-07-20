import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';



import ChoresContext from '../../utils/ChoresContext'


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));



const ChildrenForm = _ => {

  const classes = useStyles();


  const { childArr, addChildren } = useContext(ChoresContext)


  const [inputs, setInputs] = useState([{ name: null, totalPoints: 0 }]);

  const handleChange = (i, event) => {
    const names = [...inputs]
    names[i].name = event.target.value;
    names[i].totalPoints = 0
    setInputs(names)
  }

  const handleAdd = _ => {
    const names = [...inputs];
    names.push({ name: null });
    setInputs(names);
    console.log(inputs)
  }

  const handleRemove = () => {
    const names = [...inputs];
    names.splice(names.length - 1, 1);
    setInputs(names);
  }


  return (



    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Typography variant="h6" gutterBottom>
        Enter Children Name
      </Typography>
      <Fab color="primary" aria-label="Add" onClick={() => handleAdd()}>
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="Delete" onClick={() => handleRemove()}>
        <ClearIcon />
      </Fab>
      {inputs.map((input, idx) =>
        (


          <Grid container spacing={3} key={`${input}-${idx}`}>
            <Grid item xs={12} sm={12}>
              <TextField
                
                required
                id={`${idx}`}
                label={`Child ${idx + 1}`}
                fullWidth
                value={input.name || ''}
                onChange={e => handleChange(idx, e)}
              />
            </Grid>
          </Grid>

        )
      )}

      <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={_ => addChildren(inputs)}
          >
            Submit
          </Button>
    </Container>
  );
}

export default ChildrenForm


