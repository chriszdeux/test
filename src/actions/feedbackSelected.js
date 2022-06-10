import { types } from "../types/types"

const { 
  select_feedback,
  comment_post,
  reply_comment } = types
export const feedbackSelected = ( data ) => {
  return {
    type: select_feedback,
    payload: data
  }
}

export const feedbackPost = (  data ) => {
  return {
    type: comment_post,
    payload: data
  }
}

export const feedbackReply = (  data ) => {
  return {
    type: reply_comment,
    payload: data
  }
}