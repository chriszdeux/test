import { types } from "../types/types"

const { filter_by } = types

export const filterBy = ( type, data ) => {
  debugger
  return {
    type: filter_by,
    payload: {data, type}
  }
}
