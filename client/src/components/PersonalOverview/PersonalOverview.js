import React from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Marianna from '../../assets/marianna.png'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    avatar: {
        height: 60,
        width: 60,
    },
    iconLeft: {
        height: 50,
        width: 50,
    }
}))


const PersonalOverview = _ => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} md={3}>
                <Grid item xs={12} md={12} style={{ marginTop: '20px', textAlign: '-webkit-center' }}>
                    <Avatar className={classes.iconLeft} style={{ backgroundColor: '#968AF2' }}>
                        <img className={classes.avatar} alt="Avatar" src={Marianna} />
                    </Avatar>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '10px', fontFamily: 'roboto', fontSize: '20px' }}>Marianna</Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '5px', fontFamily: 'roboto', fontSize: '35px', color: '#968AF2', fontWeight: 'bold' }}>2000</Grid>
            </Grid>

        </Grid>
    )
}

export default PersonalOverview