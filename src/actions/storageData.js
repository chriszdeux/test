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

export const cleanDataFeedback = ( data ) => {
  return {
    type: types.clean_memory_feedback,
    payload: data
  }
}