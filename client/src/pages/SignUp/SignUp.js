import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../assets/background.png'
import SignUpForm from '../../components/SignUpForm'


const useStyles = makeStyles({
  mainCon: {
  backgroundColor: "#153B69",
  boxShadow: "none",
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 50,
  paddingRight: 50,
  height: 768,
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
},

});

export default function Dashboard() {
const classes = useStyles();

    return (
        <div className={classes.mainCon}>
            <SignUpForm />
        </div>
    )
}