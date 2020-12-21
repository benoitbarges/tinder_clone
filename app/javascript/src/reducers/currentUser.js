import { SET_CURRENT_USER } from '../actions/currentUser'
import { CREATE_LIKE } from '../actions/currentUser'

export default function currentUser(state = null, action) {
  switch(action.type) {

    case SET_CURRENT_USER :
      return action.payload

    case CREATE_LIKE :
      const { user_id, receiver_id } = action.payload
      console.log(state.given_likes_to)
      console.log(state.given_likes_to.concat(receiver_id))
      const given_likes_to = state.given_likes_to.concat(receiver_id)
    return {
      ...state,
      given_likes_to: given_likes_to
    }

    default :
      return state
  }
}
