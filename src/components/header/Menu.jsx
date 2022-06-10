import React from 'react'
import { useSelector } from 'react-redux'
import { RoadMap } from '../suggestions/RoadMap'
import { SuggesstionsList } from '../suggestions/SuggesstionsList'

export const Menu = ({ handleIsOpen }) => {
  const storageData = useSelector(state => state.storage_reducer)
  const { productRequests:data } = storageData.length > 0 && storageData[0]

  return (
    <div className='menu__open'>
      <div className='menu__content'>
        <SuggesstionsList data={ data }/>
        <RoadMap />
      </div>
      <div className="layout"></div>  
    </div>
  )
}
