import React, { useEffect, useState, useRef } from 'react'
import Chores from './utils/Chores.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Chorespage from './pages/Chores'
import HamzaPage from './pages/HamzaPage'
import Rewards from './pages/Reward'
import Dashboard from './pages/Dashboard'
import ChoresContext from './utils/ChoresContext'
import SignUpPage from './pages/SignUp'
import LogInPage from './pages/LogIn'
import ChildrenFormPage from './pages/ChildrenFormPage'
// import { object } from 'prop-types';


const App = _ => {

  








  const [choreState, setChoreState] = useState({
    chore: {},
    choresArr: [],
    child: {},
    childArr: [],
    task: '',
    points: 0,
    isCompleted: false,
    startDate: new Date(),
    dueDate: new Date(),
    numOfChildren: 1
  })


  choreState.selectChild = (child)=>{
    setChoreState({...choreState, child})
  }




  const [userState, setUserState] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    _userName: '',
    _userPassword: '',
    isLoggedIn: false
  })

  const [childrenState, setChildrenState] = useState({ value: null })

  // choreState.choreName = useRef()
  // choreState.chorePoints = useRef()
  // choreState.choreStartTime = useRef()
  // choreState.choreDueTime = useRef()
  // choreState.childName = useRef()

  //registration useRef functions
  // userState.name = useRef()
  // userState.userName = useRef()
  // userState.userEmail = useRef()
  // userState.userPassword = useRef()

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
        } else {
          alert('Invalid username or password')
        }
      })
      .catch(e => console.error(e))
  }


  //login useRef functions
  // userState._userName = useRef()
  // userState._userPassword = useRef()

  choreState.addChore = event => {
    event.preventDefault()

    const chore = {
      task: choreState.choreName.current.value,
      points: choreState.chorePoints.current.value,
      child: "5d2ea38e69bc173e608fa05f"
    }

    console.log(chore)

  }

  choreState.addChildren = (arr) => {
    Chores.addManyChildren({
      childArr: arr
    })
      .then(_=>{
        setChoreState({ ...choreState, childArr: arr })
      })

  }






  useEffect(_ => {
    //   const testChild = {
    //     name: "Eduardo"
    //   }

    //   const testChore = {
    //     task: "cook food for baby brother",
    //     points: 500,
    //     child: "5d2ea38e69bc173e608fa05f"

    //   }

    // Chores.addChore(testChore)

    Chores.getAllChildren()
      .then(({ data }) => {
        console.log(data)
        setChoreState({...choreState, childArr: data})
      }).catch(e => console.log(e))
  
  }, [])

  return (

    <>
      <Router>

        <Route exact path='/' render={_ =>
          <Dashboard />
        } />

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

          <Route exact path='/signUp' render={_ =>
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