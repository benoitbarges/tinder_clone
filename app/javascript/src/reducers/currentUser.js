import { SET_CURRENT_USER } from '../actions/currentUser'
import { CREATE_LIKE, CREATE_DISLIKE } from '../actions/currentUser'

export default function currentUser(state = null, action) {
  switch(action.type) {

    case SET_CURRENT_USER :
      return action.payload

    case CREATE_LIKE : {
      const { user_id, receiver_id } = action.like
      const given_likes_to = state.given_likes_to.concat(receiver_id)

      return {
        ...state,
        given_likes_to: given_likes_to
      }
    }

    case CREATE_DISLIKE : {
      const { user_id, receiver_id } = action.dislike
      const given_dislikes_to = state.given_dislikes_to.concat(receiver_id)

      return {
        ...state,
        given_dislikes_to: given_dislikes_to
      }
    }

    default :
      return state
  }
}
