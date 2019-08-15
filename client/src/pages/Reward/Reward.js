import React, { useState, useEffect } from 'react'
import MobileNav from '../../components/MobileNav'
import MenuBar from '../../components/MenuBar'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import FamilyOverview from '../../components/Reward/FamilyOverview'
import Claimed from '../../components/Reward/Claimed'
import Grabs from '../../components/Reward/Grabs'

const useStyles = makeStyles(theme => ({
  mainCon: {
    backgroundColor: '#E4ECF2',
    boxShadow: 'none',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 768,
    overflowY: 'scroll',
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
  },
  date: {
    textAlign: 'center'
  },

}))

const Rewards = _ => {
  const classes = useStyles()
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const menu = width < 1000 ? <MobileNav /> : <MenuBar />
    document.menu = menu
    return () => document.menu = ""
  }, [width])

  return (
    <div className={classes.mainCon}>
      {document.menu}
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
                // height: '175px',
                backgroundColor: 'white'
              }}>
              <FamilyOverview />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} id='claimedRewardsContainer'>
          <Claimed />
        </Grid>
        <Grid item className={classes.upForGrabsContainer} xs={12} md={6}>
          <Grabs />
        </Grid>
      </Grid>
    </div>
  )
}

export default Rewards