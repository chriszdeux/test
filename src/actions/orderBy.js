import { types } from "../types/types"

const { 
  order_most_votes,
  order_least_votes,
  order_most_comments,
  order_least_comments,
} = types

export const orderMostVotes = ( data ) => {
  return {
    type: order_most_votes,
    payload: data
  }
}
export const orderLeastVotes = ( data ) => {
  return {
    type: order_least_votes,
    payload: data
  }
}
export const orderMostComments = ( data ) => {
  return {
    type: order_most_comments,
    payload: data
  }
}
export const orderLeastComments = ( data ) => {
  return {
    type: order_least_comments,
    payload: data
  }
}
