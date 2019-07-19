import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuBar from '../../components/MenuBar'


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

export default function HamzaPage() {
const classes = useStyles();
  
    return (
      <div className={classes.mainCon}>
        <MenuBar />
        <h2>This is the personal page</h2> 
      </div>
    );
  }