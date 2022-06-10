import { useState, useEffect, useRef } from "react"
import { data_json } from '../constants/data_json'

export const useGetData = () => {
  const [data, setData] = useState({
    data: {},
    loading: true,
    error: false,
    error_message: ''
  })
  const isMount = useRef(true)

  console.log(data_json)
  useEffect(() => {
  setData({
      data: data_json,
      loading: false
    })
  }, [])
  // debugger
  return data
}