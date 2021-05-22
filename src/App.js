import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import DashBoard from '../src/dashboard/Dashboard'
import Details from '../src/details/Details'
export default function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <DashBoard />
        </Route>
        <Route exact path='/details/:handle'>
          <Details />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>

  )
}

function NotFound () {
  return <h2>404 Not Found</h2>
}
