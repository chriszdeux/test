import { types } from "../types/types"

export const storageData = ( data ) => {
  return {
    type: types.storage_data,
    payload: data
  }
}

export const storageAdd = ( data ) => {
  return {
    type: types.storage_add,
    payload: data
  }
}


export const addVote = ( data ) => {
  return {
    type: types.vote,
    payload: data
  }
}

export const removeVote = ( data ) => {
  return {
    type: types.vote_remove,
    payload: data
  }
}

export const cleanDataFeedback = ( data ) => {
  return {
    type: types.clean_memory_feedback,
    payload: data
  }
}


export const addNewFeedback = ( data ) => {
  return {
    type: types.add_new_feedback,
    payload: data
  }
}

export const deleteFeedback = ( data ) => {
  return {
    type: types.delete_feedback,
    payload: data
  }
}

