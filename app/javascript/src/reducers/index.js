import { combineReducers } from 'redux'
import currentUser from './currentUser'
import users from './users'
import likes from './likes'

export default combineReducers({
  currentUser,
  users,
  likes
})
