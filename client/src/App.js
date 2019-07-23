import React, { useEffect, useState, useRef } from 'react'
import Chores from './utils/Chores.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chorespage from './pages/Chores'
import HamzaPage from './pages/HamzaPage'
import Rewards from './pages/Reward'
import Dashboard from './pages/Dashboard'
import ChoresContext from './utils/ChoresContext'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/LogIn'
import ChartContext from './utils/ChartContext'
import ChildrenFormPage from './pages/ChildrenFormPage'
// import { object } from 'prop-types';


const App = _ => {
  //Chore State and its functions
  const [choreState, setChoreState] = useState({
    chore: {},
    choresArr: [],
    child: {},
    childArr: [],
    reward: {},
    rewardsArr: [],
    numOfChildren: 1
  })

  // choreState.addChore = event => {
  //   event.preventDefault()

  //   const chore = {
  //     task: choreState.choreName.current.value,
  //     points: choreState.chorePoints.current.value,
  //     child: "5d2ea38e69bc173e608fa05f"
  //   }

  //   console.log(chore)

  // }

  choreState.addChildren = (arr) => {
    if (arr.length) {
      Chores.addManyChildren({
        childArr: arr
      })
        .then(_ => {
          setChoreState({ ...choreState, childArr: arr })
        })
      window.location.href = '/chores'
    } else {
      alert('Please add children to continue')
    }

  }


  choreState.selectChild = (child) => {
    setChoreState({ ...choreState, child })
  }

  choreState.choreName = useRef()
  choreState.chorePoints = useRef()
  choreState.choreStartTime = useRef()
  choreState.choreDueTime = useRef()
  choreState.childName = useRef()


  //User State and its functions
  const [userState, setUserState] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    _userName: '',
    _userPassword: '',
    isLoggedIn: false
  })

  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.id]: event.target.value })
  }

  userState.registerUser = event => {
    event.preventDefault()

    const user = {
      name: userState.name,
      username: userState.userName,
      email: userState.email,
      password: userState.password
    }

    Chores.addUser(user)
      .then(({ data }) => {
        console.log(data)
        if (data.isLoggedIn) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.user)
          // localStorage.setItem('id', data._id)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, userName: data.user })
          console.log(userState.isLoggedIn)
        }
      })
      .catch(e => console.error(e))
  }

  userState.loginUser = event => {
    event.preventDefault()

    const loginUser = {
      username: userState._userName,
      password: userState._userPassword
    }

    Chores.loginUser(loginUser)
      .then(({ data }) => {
        console.log(data)
        if (data.isLoggedIn) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', data.user)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, userName: data.user })
          window.location.href = '/'
        } else {
          alert('Invalid username or password')
        }
      })
      .catch(e => console.error(e))
  }

  //USE EFFECT
  //When navigating to the login/signup page if we fail to verify, we should try using this in the future
  //https://stackoverflow.com/questions/47476186/when-user-is-not-logged-in-redirect-to-login-reactjs
  //I don't think what I have right now is idea but it works!
  useEffect(_ => {

    // Chores.verifyUser()
    //   .then(_ => {
    //     if (window.location.pathname === '/welcome') {
    //       window.location.href = '/'
    //     }
    //   }).catch(e => {
    //     if (window.location.pathname !== '/welcome') {
    //       window.location.href = '/welcome'
    //     }
    //     console.log(e)
    //   })

    Chores.getAllChildren()
      .then(({ data }) => {
        console.log(data)
        setChoreState({ ...choreState, childArr: data })
      }).catch(e => console.log(e))

  }, [])

  return (

    <>
      <Router>

      <Route exact path='/' render={_ =>
            <Home />
          } />

        <ChoresContext.Provider value={choreState}>

          <Route exact path='/Dashboard' render={_ =>
            <Dashboard />
          } />

        </ChoresContext.Provider>

        <ChoresContext.Provider value={choreState}>
          <Route exact path='/chores' render={_ =>
            <Chorespage />

          } />

        </ChoresContext.Provider>

        <Route exact path='/rewards' render={_ =>
          <Rewards />
        } />
        <Route exact path='/hamza' render={_ =>
          <HamzaPage />
        } />

        <ChoresContext.Provider value={userState}>

          <Route exact path='/SignIn' render={_ =>
            <SignUpPage />
          } />

        </ChoresContext.Provider>


        <ChoresContext.Provider value={choreState}>
          <Route exact path='/childrenForm' render={_ =>
            <ChildrenFormPage />
          } />

        </ChoresContext.Provider>

      </Router>
    </>
  )
}

export default App