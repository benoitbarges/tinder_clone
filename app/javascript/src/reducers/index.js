import { combineReducers } from 'redux'
import currentUser from './currentUser'
import users from './users'
import matches from './matches'

export default combineReducers({
  currentUser,
  users,
  matches
})
