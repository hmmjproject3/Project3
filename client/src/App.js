import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'


const App = _ => {
  return (
    <Router>
      <div>
        <Route exact path='/Dashboard' render={_ => <Dashboard />} />
      </div>
    </Router>
  )
}

export default App