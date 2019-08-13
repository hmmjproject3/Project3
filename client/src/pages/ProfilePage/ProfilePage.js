import React, { useContext, useState, useEffect } from 'react'
import MobileNav from '../../components/MobileNav'
import ChoresContext from '../../utils/ChoresContext'
import MenuBar from '../../components/MenuBar'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ProfileComplete from '../../components/ProfileComplete'
import PersonalOverview from '../../components/PersonalOverview'
import ActiveChore from '../../components/ActiveChore'

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

const ProfilePage = _ => {
  const classes = useStyles()
  const { profileArr: profile } = useContext(ChoresContext)
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
          marginTop: '40px',

          marginBottom: '20px'
        }}>
        <Grid item xs={12}
          id='usersOverviewContainer'
          style={{
            marginBottom: '0px'
          }}>
          <Paper
            className={classes.root}>
            <Grid item xs={12}
              id='usersOverviewBody'
              style={{
                height: '175px',
                backgroundColor: '#E4ECF2'
              }}>
              <PersonalOverview />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} id='claimedRewardsContainer'>
          <ProfileComplete />
        </Grid>
        <Grid item id='upForGrabsContainer' xs={12} md={6}>
          <ActiveChore />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProfilePage
