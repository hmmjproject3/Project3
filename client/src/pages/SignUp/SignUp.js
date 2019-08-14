import React from 'react'
import './SignUp.css'
import { makeStyles } from '@material-ui/core/styles'
import SignUpForm from '../../components/SignUpForm'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  mainCon: {
  },
  form: {
    boxShadow: 'none',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  }
}))

const SignUp = _ => {
  const classes = useStyles()

  return (
    <div id='backgroundImg'>
      <Grid container spacing={1} className={classes.mainCon}>
        <Grid item xs={12} md={4} className={classes.spongeGrid}/>
        <Grid item xs={12} md={8} className={classes.formGrid}>
          <SignUpForm />
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp
