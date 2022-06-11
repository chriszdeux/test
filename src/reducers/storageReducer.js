import { random } from "../constants/random";
import { types } from "../types/types";
const { 
  storage_data,
  storage_add,
  select_feedback,   
  comment_post,
  reply_comment
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
      // debugger
      // const add_comment = {
      //   user: currentUser,
      //   content: 
      // }
      // debugger
      const a = state.map(item => {
        if(item.id === action.payload.id) {
          debugger
          return action.payload
        } else {
          // debugger
          return item
        }
      })
      // debugger
      return a
    default:
      return state
  }
}