import React from 'react'
import { RoadmapCard } from './RoadmapCard'

export const RoadmapBySections = ({text}) => {
  return (
    <div className='roadmap__column'>
      <h2>{ `In-Progess (3)`} <span className='text--2'>{ text }</span> </h2>

      <div className='list__roadmap__cards'>
        <RoadmapCard />
      </div>
    </div>
  )
}
