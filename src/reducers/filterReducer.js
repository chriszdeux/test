import { types } from "../types/types";

const { filter_by, filter_all } = types

export const filterReducer = ( state = [], action ) => {
  // debugger
  switch (action.type) {
    case filter_all:
      return [{...action.payload.data}]
    
    case filter_by:
      return action.payload.data[0].productRequests.filter(item => item.category === action.payload.type)
      default:
    return state
  }
}