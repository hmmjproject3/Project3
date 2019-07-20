import React, {Component} from 'react'
import MenuBar from '../../components/MenuBar'
import ChildChores from '../../components/ChildChores'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Left from '../../assets/left.png';
import Right from '../../assets/right.png';




const useStyles = makeStyles({
      mainCon: {
      backgroundColor: "#E4ECF2",
      boxShadow: "none",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 50,
      paddingRight: 50,
      height: 768,
      
    },
      date: {
        textAlign: "center",
      }
  });
  
  export default function Chores() {
    const classes = useStyles();
  
    return (
      <div className={classes.mainCon}>
        <MenuBar />
        <Typography className={classes.date}>
        <h3>
        <img alt="Left Arrow" src={Left} />
        Jan 5 - Jan 12 
        <img alt="Left Right" src={Right} />
        </h3></Typography>
        <Grid container spacing={3}>

        <Grid item xs={6}>
        <ChildChores />
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        </Grid>
    
  
      </div>
    );
  }