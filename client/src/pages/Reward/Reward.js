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

export default function Reward() {
const classes = useStyles();

    return (
        <div className={classes.mainCon}>
        <MenuBar />
        
       <h3>This is the gift page</h3>
    
  
      </div>
    );
  }