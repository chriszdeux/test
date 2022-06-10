import { types } from "../types/types";

const { 
  filter_all, 
  filter_bug, 
  filter_ui,
  filter_ux,
  filter_enhancement,
  filter_feature, 
  order_most_votes,
  order_least_votes,
  order_most_comments,
  order_least_comments,
  
} = types

export const filterReducer = ( state = [], action ) => {
  
  switch (action.type) {
    case filter_all:
      return action.payload;
    
    case filter_ui:
      return action.payload.filter(item => item.category === action.type)

    case filter_ux:
      return action.payload.filter(item => item.category === action.type)      
    
    case filter_enhancement:
      return action.payload.filter(item => item.category === action.type)      
    
    case filter_bug:
      return action.payload.filter(item => item.category === action.type)      
    
    case filter_feature:
      return action.payload.filter(item => item.category === action.type)      
    
    case order_most_votes: 
      return action.payload.sort((a, b) => {
        return b.upvotes - a.upvotes
      })
    case order_least_votes:
      return action.payload.sort((a, b) => {
        return a.upvotes - b.upvotes
      })

    case order_most_comments:
      return action.payload.sort((a, b) => {
        return b.comments?.length - a.comments?.length
      })

    case order_least_comments:
      return action.payload.sort((a, b) => {
        return a.comments?.length - b.comments?.length
      })


      default: return state
  }
}