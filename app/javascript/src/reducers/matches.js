import { CREATE_MATCH } from '../actions/matches'

export default function matches(state = {}, action) {
  switch(action.type) {
    case CREATE_MATCH : {
      console.log(action.payload)

      return state
    }

    default :
      return state
  }
}
