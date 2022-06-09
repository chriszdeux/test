import React from 'react'
import { RoadMap } from '../suggestions/RoadMap'
import { SuggesstionsList } from '../suggestions/SuggesstionsList'

export const Menu = () => {
  return (
    <div className='menu__open'>
      <div className='menu__content'>
        <SuggesstionsList />
        <RoadMap />
      </div>
      <div className="layout"></div>  
    </div>
  )
}
