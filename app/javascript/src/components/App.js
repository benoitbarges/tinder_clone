import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'
import { setUsers } from '../actions/users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Profile from './Profile'
import Navbar from './Navbar'
import LikeCard from './LikeCard'
import Matches from './Matches'
import ChatList from './ChatList'
import Match from './Match'

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
          <Route exact path='/profile' component={Profile} />
          <Route path='/profile/:id'>
            <Profile buttonText='Start chating' />
          </Route>
          <Route path='/match-list' component={Matches} />
          <Route path='/matches/:id' component={Match} />
          <Route path='/chat' component={ChatList} />
        </Switch>
      }
      <Navbar />
    </Router>
  )
}
