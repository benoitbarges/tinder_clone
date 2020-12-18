import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Profile from './Profile'
import Navbar from './Navbar'

export default function App () {

  const dispatch = useDispatch()

  const store = useSelector(store => store)
  console.log(store)

  React.useEffect(() => {
    dispatch(setCurrentUser())
  }, [dispatch])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Profile} />
        </Switch>

        <Navbar />
      </Router>
    </div>
  )
}
