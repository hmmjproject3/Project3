import React, { useContext, useRef } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import ChoresContext from '../../utils/ChoresContext'


const AddKidChores = _ => {

  const { handleInputChange, addChore, choreName, cheddarReward } = useContext(ChoresContext)
  

  return (
    <Container component="main" maxWidth="xs" >

      <form noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              name="Name"
              variant="outlined"
              required
              fullWidth
              id="choreName"
              value={choreName}
              // ref={choreName}
              onChange={handleInputChange}
              label="Name"
            // autoFocus

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="userName"
              name="userName"
              variant="outlined"
              required
              fullWidth
              id="cheddarReward"
              value={cheddarReward}
              // ref={cheddarReward}
              onChange={handleInputChange}
              label="User Name"
            // autoFocus
            />
          </Grid>
        </Grid>


      </form>




    </Container>
  );
}

export default AddKidChores
