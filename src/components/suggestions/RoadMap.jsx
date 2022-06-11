import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFilterRoadmap } from '../../hooks/usefilterRoadmap'

export const RoadMap = () => {
  const storageData = useSelector(state => state.storage_reducer)

  const { planned, inProgress, live }  = useFilterRoadmap(storageData)
  const navigate = useNavigate();
  // debugger
  const goRoadMap = () => {
    navigate('/test/roadmap')
  }
  return (
    <div className="roadmap">
      <div className="roadmap__header">
        <h2>Roadmap</h2>
        <h3 onClick={ goRoadMap }>View</h3>
      </div>
      <ul className="roadmap__list">
          <li>
            <p className="text--2"> <strong className='planned-color'></strong> Planed</p>      
            <h3>{ planned.length }</h3>
          </li>
          <li>
            <p className="text--2"> <strong className='in-progress-color'></strong> In-Progress</p>      
            <h3>{ inProgress.length }</h3>
          </li>
          <li>
            <p className="text--2"> <strong className='live-color'></strong> Live</p>      
            <h3>{ live.length }</h3>
          </li>
      </ul>
    </div>
  )
}
