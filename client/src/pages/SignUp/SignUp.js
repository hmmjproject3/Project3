import React from 'react'
import './SignUp.css'
import { makeStyles } from '@material-ui/core/styles'
import SignUpForm from '../../components/SignUpForm'


// const useStyles = makeStyles({
//   mainCon: {
//     backgroundColor: "#153B69",
//     boxShadow: "none",
//     paddingTop: 20,
//     paddingBottom: 20,
//     paddingLeft: 50,
//     paddingRight: 50,
//     height: 768,
//     backgroundImage: `url(${Background})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
//   },

// });




const SignUp = _ => {

  return (
    <div className='overlay'>
        <SignUpForm />
    </div>
  )
}

export default SignUp
