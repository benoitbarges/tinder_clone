import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'
import { setUsers } from '../actions/users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Profile from './Profile'
import Navbar from './Navbar'
import LikeCard from './LikeCard'
import Matches from './Matches'

export default function App () {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.currentUser === null)

  const store = useSelector(store => store)
  console.log(store)

  React.useEffect(() => {
    dispatch(setCurrentUser())
    dispatch(setUsers())
  }, [dispatch])

  return (
    <Router>
      {!loading &&
        <Switch>
          <Route exact path='/' component={LikeCard} />
          <Route  path='/profile' component={Profile} />
          <Route  path='/matches' component={Matches} />
        </Switch>
      }
      <Navbar />
    </Router>
  )
}
