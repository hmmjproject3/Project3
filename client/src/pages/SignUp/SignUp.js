import React from 'react'
<<<<<<< HEAD
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
=======
import SignUpForm from '../../components/SignUpForm'





const SignUp = _ => {


    return (
        <>
          <SignUpForm/>
        </>
    )
}

export default SignUp
>>>>>>> ddcfc7be8c5f96ab8299a8c84043ca790f4d0fd0
