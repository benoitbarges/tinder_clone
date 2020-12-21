import { CREATE_LIKE } from '../actions/likes'

export default function likes(state = {}, action) {
  switch(action.type) {

    case CREATE_LIKE :
      console.log('here >>>>>>>>', action.payload)
      return {
        ...state
      }

    default :
      return state
  }
}
