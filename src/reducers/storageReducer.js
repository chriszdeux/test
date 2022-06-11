import { random } from "../constants/random";
import { types } from "../types/types";
const { 
  storage_data,
  storage_add,
  select_feedback,   
  comment_post,
  reply_comment,
  vote,
  vote_remove
} = types

const currentUser = {
  "image": "./assets/user-images/image-zena.jpg",
  "name": "Zena Kelley",
  "username": "velvetround"
}

export const storageReducer = ( state = [], action ) => {
  // debugger
  const { comment, data } = action.payload !== undefined && action.payload
  // const { comments } = data && data
  switch (action.type) {
    case storage_data:
      return action.payload ;
    case storage_add:
      return state.map(item => {
        return item.id === action.payload.id ?action.payload : item
      })

      case vote:
        return state.map(item => {
          if(item.id === action.payload.id) {
            return { ...action.payload, upvotes: action.payload.upvotes + 1, voted: true }
          } else {
            return item
          }
        })
      case vote_remove:
        return state.map(item => {
          if(item.id === action.payload.id) {
            return { ...action.payload, upvotes: action.payload.upvotes - 1, voted: false }
          } else {
            return item
          }
        })
    default: 
      return state
  }
}