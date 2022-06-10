import { data_json } from "../constants/data_json"
import { random } from "../constants/random"
import { types } from "../types/types"

const { select_feedback,   comment_post,
  reply_comment, clean_memory_feedback } = types
  const { currentUser } = data_json
export const feedbackSelectReducer = ( state = {}, action ) => {
  const { comments } = state
  switch (action.type) {
    case select_feedback:
      return action.payload

      case comment_post:
        // debugger
        return {...state, comments: [...comments, { user: currentUser, id: random(), content: action.payload } ]}


      case reply_comment:
        debugger
      case clean_memory_feedback:
        return {}
    default:
      return state
  }
}
