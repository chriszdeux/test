import React from 'react'
import { useSelector } from 'react-redux'
import { RoadMap } from '../suggestions/RoadMap'
import { SuggesstionsList } from '../suggestions/SuggesstionsList'

export const TabletHeader = () => {
  const data = useSelector(state => state.storage_reducer)
  // const { productRequests:data } = storageData.length > 0 && storageData[0]
 
  return (
    <div className='tablet__header'>
      <div className='company'>
        <h3 className=''>Frontend Mentor</h3>
        <h4 className='text--2'>Feedback Board</h4>
      </div>
      <SuggesstionsList data={ data }/>
      <RoadMap />
    </div>
  )
}
