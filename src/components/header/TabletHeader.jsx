import React from 'react'
import { RoadMap } from '../suggestions/RoadMap'
import { SuggesstionsList } from '../suggestions/SuggesstionsList'

export const TabletHeader = () => {
  return (
    <div className='tablet__header'>
      <div className='company'>
        <h3 className=''>Frontend Mentor</h3>
        <h4 className='text--2'>Feedback Board</h4>
      </div>
      <SuggesstionsList />
      <RoadMap />
    </div>
  )
}
