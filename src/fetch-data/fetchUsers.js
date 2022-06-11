import {data} from "../constants/data"
import axios from 'axios';

export const fetchUsers = async () => {
  const dataFetch = await axios.get(data).then(response => {
    // console.log(response)
  })
  debugger
  return dataFetch
}