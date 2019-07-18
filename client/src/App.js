import React, {useEffect} from 'react'
import Chores from './utils/Chores.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Chores from './pages/Chores'


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
    <Router>
      <div>
        <Route exact path='/Dashboard' render={_ => <Dashboard />} />
      </div>
    </Router>
  )
}

export default App