import React, { useEffect, useState, useRef } from 'react'
import Chores from './utils/Chores.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Chorespage from './pages/Chores'
import HamzaPage from './pages/HamzaPage'
import Rewards from './pages/Reward'
import Dashboard from './pages/Dashboard'
import ChoresContext from './utils/ChoresContext'


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

  const [userState, setUsertate] = useState({
    user: '',
    isLoggedIn: false
  })

  choreState.choreName = useRef()
  choreState.chorePoints = useRef()
  choreState.choreStartTime = useRef()
  choreState.choreDueTime = useRef()
  choreState.childName = useRef()

  //registration useRef functions
  userState.userName = useRef()
  userState.Email = useRef()
  userState.Password = useRef()

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
        <Route exact path='/' render={_ =>
          <Dashboard />
        } />
        <Route exact path='/chores' render={_ =>
          <Chorespage />
        } />
        <Route exact path='/rewards' render={_ =>
          <Rewards />
        } />
        <Route exact path='/hamza' render={_ =>
          <HamzaPage />
        } />
      </Router>
    </>
  )
}

export default App