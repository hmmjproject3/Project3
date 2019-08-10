import React, { useContext, useState } from 'react'
import ChoresContext from '../../../utils/ChoresContext'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  familyGrid: {
    overflowY: 'scroll',
  },
  member: {
    margin: 'auto',
    overflowY: 'auto',
    padding: 10,
  },
  avatar: {
    color: '#fff',
    height: 48,
    width: 48,
    marginRight: 5,
    marginTop: 10,
    display: 'inline-flex',
    fontSize: 25
  }
}))

const FamilyOverview = _ => {
  const { childArr } = useContext(ChoresContext)
  const classes = useStyles()

  return (
    <Grid container className={classes.familyGrid}>
      {childArr.map(({ name, color, totalPoints }) => {
        return (
            <Grid item className={classes.member}>
              <Avatar className={classes.avatar} style={{ backgroundColor: `${color}` }}>{name[0]}</Avatar>
            <Grid item style={{ marginTop: '10px', fontFamily: 'roboto', fontSize: '20px' }}>{name}</Grid>
            <Grid item style={{ marginTop: '5px', marginBottom: '10px', fontFamily: 'roboto', fontSize: '35px', color: `${color}`, fontWeight: 'bold' }}>{totalPoints}</Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FamilyOverview
