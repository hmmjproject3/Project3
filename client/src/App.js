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
import ChartContext from './utils/ChartContext'

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
  })

  const [userState, setUserState] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    _userName: '',
    _userPassword: '',
    isLoggedIn: false
  })

  const [chartState, setChartState] = useState({
    label: '',
    data: 0
  })

  choreState.choreName = useRef()
  choreState.chorePoints = useRef()
  choreState.choreStartTime = useRef()
  choreState.choreDueTime = useRef()
  choreState.childName = useRef()

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
          localStorage.setItem('userName', data.user)
          localStorage.setItem('id', data._id)
          setUserState({ ...userState, isLoggedIn: data.isLoggedIn, userName: data.user })
        }
      })
      .catch(e => console.error(e))
  }

  //login useRef functions
  userState._userName = useRef()
  userState._userPassword = useRef()

  choreState.addChore = event => {
    event.preventDefault()

    const chore = {
      task: choreState.choreName.current.value,
      points: choreState.chorePoints.current.value,
      child: "5d2ea38e69bc173e608fa05f"
    }

    console.log(chore)
    // Chores.addChore(chore)
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
      }).catch(e => console.log(e))
  }, [])

  return (

    // <Router>
    //   <div>
    //     <Route exact path='/Dashboard' render={_ => <Dashboard />} />
    //   </div>
    // </Router>
    // <ChoresContext.Provider value={choreState}>
    //   <Chorespage/>
    // </ChoresContext.Provider>
    <>
      <Router>
        <ChartContext.Provider value={choreState}>

        <Route exact path='/' render={_ =>
          <Dashboard />
        } />

        </ChartContext.Provider>

        <Route exact path='/chores' render={_ =>
          <Chorespage />

        } />
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
          <Route exact path='/logIn' render={_ =>
            <LogInPage />
          } />

        </ChoresContext.Provider>

      </Router>
    </>
  )
}

export default App