import React, { Component } from 'react'
import MenuBar from '../../components/MenuBar'
import ChildChores from '../../components/ChildChores'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Left from '../../assets/left.png'
import Right from '../../assets/right.png'
import AddBonusChores from '../../components/AddBonusChores'

const useStyles = makeStyles(theme => ({
  mainCon: {
    backgroundColor: '#E4ECF2',
    boxShadow: 'none',
    maginTop: 20,
    marginBottom: 20,
    marginLeft: 50,
    maginRight: 50,
    height: 768,
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
    },
  },
  date: {
    maginTop: "30px",
    textAlign: "center",
    color: "#153B69",
  }
}))

export default function Chores () {
  const classes = useStyles()

  return (
    <div className={classes.mainCon}>
      <MenuBar />
      <Typography className={classes.date}>
        {/* <h3> */}
        <img alt='Left Arrow' src={Left} />
          Jan 5 - Jan 12
        <img alt='Left Right' src={Right} />
        {/* </h3> */}
      </Typography>
      <Grid container spacing={1}>

        <Grid item xs={6}>
          <ChildChores />
        </Grid>
        <Grid item xs={6}>
          <AddBonusChores />
        </Grid>
      </Grid>

    </div>
  )
}
