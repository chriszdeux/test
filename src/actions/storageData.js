import { types } from "../types/types"

export const storageData = ( data ) => {
  return {
    type: types.storage_data,
    payload: data
  }
}