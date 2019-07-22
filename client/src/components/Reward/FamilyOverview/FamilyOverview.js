import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Hamza from '../../../assets/hamza.png'
import Jennifer from '../../../assets/jennifer.png'
import Matthew from '../../../assets/matthew.png'
import Marianna from '../../../assets/marianna.png'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    avatar: {
        height: 30,
        width: 30,
      },
    iconLeft: {
        height: 30,
        width: 30,
      }
}))
  

const FamilyOverview = _ => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} md={4}>One</Grid>
            <Grid item xs={12} md={4}>Two</Grid>
            <Grid item xs={12} md={4}>Three</Grid>
        </Grid>
    )
}

export default FamilyOverview