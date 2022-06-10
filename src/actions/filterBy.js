import { types } from "../types/types"

const { 
  filter_all,
  filter_ui,
  filter_ux,
  filter_enhancement,
  filter_bug,
  filter_feature, 

  order_most_votes,
  order_least_votes,
  order_most_comments,
  order_least_comments,
} = types

export const filterAll = ( data ) => {
  return {
    type: filter_all,
    payload: data
  }
}

export const filterUI = ( data ) => {
  return {
    type: filter_ui,
    payload: data
  }
}

export const filterUX = ( data ) => {
  
  return {
    type: filter_ux,
    payload: data
  }
}

export const filterEnhancement = ( data ) => {
  return {
    type: filter_enhancement,
    payload: data
  }
}

export const filterBug = ( data ) => {

  return {
    type: filter_bug,
    payload: data
  }
}

export const filterFeature = ( data ) => {
  return {
    type: filter_feature,
    payload: data
  }
}


