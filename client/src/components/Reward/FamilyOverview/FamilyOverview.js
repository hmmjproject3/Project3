import React, { useContext, useState } from 'react'
import ChoresContext from '../../../utils/ChoresContext'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  familyGrid: {
    overflow: 'auto'
  }
}))


const FamilyOverview = _ => {
  const { childArr } = useContext(ChoresContext)
  const classes = useStyles()

  return (
    <Grid container className={classes.familyGrid}>
      {childArr.map(({ name, color, totalPoints }) => {
        return (
          <Grid item xs={12} md={3}>
            <Grid item xs={12} md={12} style={{ marginTop: '20px', textAlign: '-webkit-center' }}>
              <Avatar
                className={classes.avatar}
                style={{
                  color: '#fff',
                  backgroundColor: `${color}`,
                  height: 48,
                  width: 48,
                  marginRight: '5px',
                  display: 'inline-flex',
                  fontSize: '25px'
                }}>{name[0]}</Avatar>
            </Grid>
            <Grid item xs={12} md={12} style={{ marginTop: '10px', fontFamily: 'roboto', fontSize: '20px' }}>{name}</Grid>
            <Grid item xs={12} md={12} style={{ marginTop: '5px', fontFamily: 'roboto', fontSize: '35px', color: `${color}`, fontWeight: 'bold' }}>{totalPoints}</Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default FamilyOverview