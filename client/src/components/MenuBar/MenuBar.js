import React, { useContext, useState } from 'react'
import ChoresContext from '../../utils/ChoresContext'
import Chores from '../../utils/Chores.js'
import { makeStyles } from '@material-ui/core/styles'
import Settings from '@material-ui/icons/Settings'
import LocalAtm from '@material-ui/icons/LocalAtm'
import Home from '@material-ui/icons/Home'
import LocalLaundryService from '@material-ui/icons/LocalLaundryService'
import People from '@material-ui/icons/People'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    marginTop: 15
  },
  con: {
    flexGrow: 1
  },
  right: {
    textAlign: 'right'
  },
  iconsright: {
    backgroundColor: '#24537f',
    color: '#E4ECF2',
    marginRight: 10,
    height: 48,
    width: 48,
    display: 'inline-flex'
  },
  link: {
    textDecoration: 'none'
  },
  appBar: {
    backgroundColor: '#E4ECF2',
    boxShadow: 'none',
    position: 'initial'

  }
})

export default function SimpleAppBar () {
  const { profileArr, childArr, handleGetProfile, selectChild, child, handleInputChange, addChore, choreName, cheddarReward, deleteAChore } = useContext(ChoresContext)
  const classes = useStyles()

  return (
    <div className={classes.root}>

      <div className={classes.con}>
        <Grid container spacing={3}>

          <Grid className={classes.left} item xs={8}>
            {childArr.map(({ name, color, _id }) => {
              return (
                <Link className={classes.link} to='/profilepage'>
                  <Avatar
                    id={`${_id}`}
                    onClick={_ => { handleGetProfile(_id) }}
                    className={classes.avatar}
                    style={{
                      color: '#fff',
                      backgroundColor: `${color}`,
                      height: 48,
                      width: 48,
                      marginRight: '5px',
                      display: 'inline-flex',
                      fontSize: '25px'
                    }}
                  >{name[0]}
                  </Avatar>
                </Link>
              )
            }
            )}
          </Grid>

          <Grid className={classes.right} item xs={4}>

            <Link className={classes.link} to='/Dashboard'>
              <IconButton className={classes.iconsright}>
                <Home />
              </IconButton>
            </Link>

            <Link className={classes.link} to='/chorespage'>
              <IconButton className={classes.iconsright}>
                <LocalLaundryService />
              </IconButton>
            </Link>

            <Link className={classes.link} to='/rewardspage'>
              <IconButton className={classes.iconsright}>
                <LocalAtm />
              </IconButton>
            </Link>

            <Link className={classes.link} to='/childrenform'>
              <IconButton className={classes.iconsright}>
                <People />
              </IconButton>
            </Link>

          </Grid>
        </Grid>
      </div>
    </div>
  )
}
