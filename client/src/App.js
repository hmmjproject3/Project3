import React, {useEffect} from 'react'
import Chores from './utils/Chores.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Chorespage from './pages/Chores'
import HamzaPage from './pages/HamzaPage'
import Rewards from './pages/Reward'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'



const App = _ => {

  // useEffect(_ => {
  //   const testChild = {
  //     name: "Eduardo"
  //   }

  //   const testChore = {
  //     task: "cook food for baby brother",
  //     points: 500,
  //     child: "5d2ea38e69bc173e608fa05f"

  //   }

  //   Chores.getAllChildren()
  //     .then(({ data }) => {
  //       console.log(data)
  //     }).catch(e => console.log(e))
  // }, [])

  return (
      <>
      <Router>
          <Route exact path='/' render={_ =>
            <Dashboard/>
          } />
          <Route exact path='/chores' render={_ =>
            <Chorespage/>
          } />
           <Route exact path='/rewards' render={_ =>
            <Rewards/>
          } />
          <Route exact path='/hamza' render={_ =>
            <HamzaPage/>
          } />
           <Route exact path='/signup' render={_ =>
            <SignUp/>
          } />
          
          
      </Router>
    </>
  )
}

export default App