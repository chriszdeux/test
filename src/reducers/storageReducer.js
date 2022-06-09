import { types } from "../types/types";

export const storageReducer = ( state = [], action ) => {
  switch (action.type) {
    case types.storage_data:
      return [{ ...action.payload }];
    
    case types.delete_data:
      return []
    default:
      return state
  }
}