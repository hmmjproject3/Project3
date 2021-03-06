import React, { useContext, useState } from 'react'
import ChoresContext from '../../utils/ChoresContext'
import Chores from '../../utils/Chores.js'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Marianna from '../../assets/marianna.png'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 60,
    width: 60
  },
  iconLeft: {
    height: 50,
    width: 50
  }
}))

const PersonalOverview = _ => {
  const { profileArr: profile } = useContext(ChoresContext)
  const classes = useStyles()
  console.log(profile)
  return (
    <Grid container>

      <Grid item xs={12} md={12} style={{ marginTop: '0px', textAlign: 'center' }}>
        <Avatar
          className={classes.avatarBig}
          style={{
            backgroundColor: '#968AF2',
            color: '#fff',
            backgroundColor: `${profile.color}`,
            height: 48,
            width: 48,
            marginRight: '5px',
            display: 'inline-flex',
            fontSize: '25px',
            textAlign: 'center'
          }}>{profile.name ? `${profile.name}`.charAt(0) : 'M'}
        </Avatar>
      </Grid>
      <Grid item xs={12} md={12} style={{ color: '#153B69', marginTop: '10px', fontFamily: 'roboto', fontSize: '40px' }}>{profile.name}</Grid>
      <Grid item xs={12} md={12} style={{ marginTop: '5px', fontFamily: 'roboto', fontSize: '40px', color: `${profile.color}`, fontWeight: 'bold' }}>{profile.totalPoints}</Grid>

    </Grid>
  )
}

export default PersonalOverview
