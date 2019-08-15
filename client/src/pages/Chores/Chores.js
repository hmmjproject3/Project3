import React, { useState, useEffect } from 'react'
import MobileNav from '../../components/MobileNav'
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
    maginTop: 100,
    marginBottom: 20,
    width: '90%',
    margin: 'auto',
    // height: 768,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: 20,
    },
  },
  date: {
    marginTop: '30px',
    textAlign: 'center',
    color: '#153B69',
  }
}))

export default function Chores () {
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
      <Typography className={classes.date}>
        {/* <h3> */}
        <img alt='Left Arrow' src={Left} />
          Aug 26 - Sep 1
        <img alt='Left Right' src={Right} />
        {/* </h3> */}
      </Typography>
      <Grid className={classes.choresCont} container spacing={1}>
        <Grid item xs={12} md={6}>
          <ChildChores />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddBonusChores />
        </Grid>
      </Grid>

    </div>
  )
}
