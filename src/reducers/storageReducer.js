import { types } from "../types/types";
const { 
  storage_data,
  filter_all 
} = types
export const storageReducer = ( state = [], action ) => {
  switch (action.type) {
    case storage_data || filter_all:
      return [{ ...action.payload }];
    
    case types.delete_data:
      return []
    
    default:
      return state
  }
}