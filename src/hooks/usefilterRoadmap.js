import { useEffect, useState } from "react"

export const useFilterRoadmap = ( data ) => {
  const [planned, setPlanned] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [live, setLive] = useState([])

  const filterPlanned = (filter) => {
    const temp = filter.filter(item => item.status === 'planned')
    setPlanned(temp)
  }

  const filterInProgress = (filter) => {
    const temp = filter.filter(item => item.status === 'in-progress')
    setInProgress(temp)
  }

  const filterLive = (filter) => {
    const temp = filter.filter(item => item.status === 'live')
    setLive(temp)
  }

  useEffect(() => {
    filterPlanned(data)
    filterInProgress(data)
    filterLive(data)
  }, [ data ])
  // debugger
  // console.log( filterRoadmap)
  return { planned, inProgress, live }
}