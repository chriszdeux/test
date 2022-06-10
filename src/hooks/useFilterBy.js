import { useState } from "react"

export const useFilterBy = ( data ) => {
  const handleAll = () => {
    setHandleData(data)
  }

  
  const [handleData, setHandleData] = useState([
    {
      filter_by: 'All',
      filter_with: handleAll
    },
  ])


  const handleFilterBy = () => {

  }


  return handleData
}