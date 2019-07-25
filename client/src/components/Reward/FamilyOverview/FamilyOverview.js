import React from 'react'
import 'typeface-roboto'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
    peachAvatar: {
        color: '#fff',
        backgroundColor: "#FFBA00",
      },
      orangeAvatar: {
        color: '#fff',
        backgroundColor: "#FF9300",
      },
      blueAvatar: {
        color: '#fff',
        backgroundColor: "#60B0F5",
      },
      purpleAvatar: {
        color: '#fff',
        backgroundColor: "#968AF2",
      },
      avatar: {
        margin: 0,
      },
}))


const FamilyOverview = _ => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} md={3}>
                <Grid item xs={12} md={12} style={{ marginTop: '20px', textAlign: '-webkit-center' }}>
                <Avatar className={classes.purpleAvatar}>M</Avatar>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '10px', fontFamily: 'roboto', fontSize: '20px' }}>Marianna</Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '5px', fontFamily: 'roboto', fontSize: '35px', color: '#968AF2', fontWeight: 'bold' }}>2000</Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <Grid item xs={12} md={12} style={{ marginTop: '20px', textAlign: '-webkit-center' }}>
                <Avatar className={classes.orangeAvatar}>J</Avatar>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '10px', fontFamily: 'roboto', fontSize: '20px' }}>Jennifer</Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '5px', fontFamily: 'roboto', fontSize: '35px', color: '#FF9300', fontWeight: 'bold' }}>2000</Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <Grid item xs={12} md={12} style={{ marginTop: '20px', textAlign: '-webkit-center' }}>
                <Avatar className={classes.blueAvatar}>M</Avatar>
                </Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '10px', fontFamily: 'roboto', fontSize: '20px' }}>Matthew</Grid>
                <Grid item xs={12} md={12} style={{ marginTop: '5px', fontFamily: 'roboto', fontSize: '35px', color: '#968AF2', fontWeight: 'bold' }}>2000</Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <Grid item xs={12} md={12} style={{ marginTop: '20px', textAlign: '-webkit-center' }}>
                <Avatar className={classes.orangeAvatar}>J</Avatar>
                    <Grid item xs={12} md={12} style={{ marginTop: '10px', fontFamily: 'roboto', fontSize: '20px' }}>Hamza</Grid>
                    <Grid item xs={12} md={12} style={{ marginTop: '5px', fontFamily: 'roboto', fontSize: '35px', color: '#FFBA00', fontWeight: 'bold' }}>2000</Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default FamilyOverview