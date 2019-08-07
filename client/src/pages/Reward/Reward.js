import React, { Component } from 'react'
import MenuBar from '../../components/MenuBar'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Left from '../../assets/left.png'
import Right from '../../assets/right.png'
import FamilyOverview from '../../components/Reward/FamilyOverview'
import Claimed from '../../components/Reward/Claimed'
import Grabs from '../../components/Reward/Grabs'

const useStyles = makeStyles({
  mainCon: {
    backgroundColor: '#E4ECF2',
    boxShadow: 'none',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    height: 768

  },
  date: {
    textAlign: 'center'
  }
})

export default function Reward () {
  const classes = useStyles()

  return (
    <div className={classes.mainCon}>
      <MenuBar />
      <Grid container
        id='rewardsContainer'
        spacing={3}
        style={{
          textAlign: 'center',
          width: 'auto',
          marginTop: '20px'
        }}>
        <Grid item xs={12}
          id='usersOverviewContainer'
          style={{
            marginBottom: '0px'
          }}>
          <Paper
            className={classes.root}>
            <Grid item xs={12}
              id='usersOverviewHead'
              style={{
                backgroundColor: '#24537f',
                height: '50px',
                color: 'white',
                fontFamily: 'roboto',
                fontSize: '25px',
                textAlign: 'left'
              }}>
              <p style={{ margin: '0px', padding: '10px' }}>Family Overview</p>
            </Grid>
            <Grid item xs={12}
              id='usersOverviewBody'
              style={{
                height: '175px',
                backgroundColor: 'white'
              }}>
              <FamilyOverview />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} id='claimedRewardsContainer'>
          <Claimed />
        </Grid>
        <Grid item id='upForGrabsContainer' xs={12} md={6}>
          <Grabs />
        </Grid>
      </Grid>
    </div>
  )
}
