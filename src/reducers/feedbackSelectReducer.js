import { data_json } from "../constants/data_json"
import { random } from "../constants/random"
import { types } from "../types/types"

const { select_feedback,   comment_post,
  reply_comment, clean_memory_feedback, edit_feedback } = types
  const { currentUser } = data_json
export const feedbackSelectReducer = ( state = {}, action ) => {
  const { comments } = state
  switch (action.type) {
    case select_feedback:
      return action.payload

      case comment_post:
        if(comments) {
          // debugger
          return {...state, comments: [...comments, { user: currentUser, id: random(), content: action.payload } ]}
        } else {
          // debugger
          return {...state, comments: [{ user: currentUser, id: random(), content: action.payload } ]}
        }
      
    
    case edit_feedback:
      const { title, description, status, category } = action.payload  
      return {
        ...action.payload,
        title: title.length === 0 ? state.title : title,
        description: description.length === 0 ? state.description : description,
        category: category.length === 0 ? state.category : category,
        status: status.length === 0 ? state.status : status,
        
      }

    case reply_comment:
    case clean_memory_feedback:
      return {}
    default:
      return state
  }
}
