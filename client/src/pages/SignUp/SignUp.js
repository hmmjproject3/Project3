import React from 'react'
import './SignUp.css'
import { makeStyles } from '@material-ui/core/styles'
import SignUpForm from '../../components/SignUpForm'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  // mainCon: {
  //   backgroundImage: `url(${Background})`,
  //   backgroundPosition: 'center',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   height: 768
  // },
  form: {
    boxShadow: 'none',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50
  }
})

const SignUp = _ => {
  const classes = useStyles()

  return (
    <div className='backgroundImg'>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} id='emptyLeft' />
        <Grid item xs={12} md={8}>
          <SignUpForm />
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp
