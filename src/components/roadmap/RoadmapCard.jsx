import React from 'react'
import { FeedbackCard } from '../main/FeedbackCard'

export const RoadmapCard = () => {
  return (
    <div className='roadmap__card'>
      <div className='status'>
        <div></div>
        <p className='text--2'>In Progress</p>
      </div>
      <FeedbackCard />
    </div>
  )
}
