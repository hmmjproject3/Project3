import React from 'react'
import './Home.css'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

const Home = _ => {
  const classes = useStyles()
  return (
    <div
      className='overlayHome'
      style={{
        backgroundColor: '#153B69'
      }}>
      <Grid container
        style={{
          borderRadius: '30px',
          textAlign: 'center',
          fontFamily: 'roboto',
          marginLeft: '250px',
          marginRight: '250px',
          marginTop: '200px',
          height: '350px',
          width: 'auto',
          backgroundColor: 'rgba(7,33,65,0.96)'
        }}>
        <Grid item xs={12}
          style={{
            marginTop: '70px',
            color: 'white',
            fontSize: '60px'
          }}>
          <img alt='adulting logo' src='logo.png' />
        </Grid>
        <Grid item xs={12}
          style={{
            color: 'white',
            fontSize: '45px'
          }}>
          <Fab
            variant='extended'
            aria-label='signIn'
            className={classes.fab}
            style={{
              fontSize: '25px'
            }}
            href='/signin'>
                        Sign-in / Register
          </Fab>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
